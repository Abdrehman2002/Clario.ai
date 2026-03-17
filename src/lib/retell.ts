// Retell AI Web Call Integration
// This utility handles creating web calls with Retell AI agents

interface RetellWebCallResponse {
  call_id: string;
  access_token: string;
  agent_id: string;
  agent_version?: string;
  call_status: string;
}

interface RetellAgent {
  id: string;
  name: string;
  description: string;
}

// Available Retell AI Agents
export const RETELL_AGENTS: RetellAgent[] = [
  {
    id: 'agent_7fd7ccb79e102797dc752d1129',
    name: 'AutoCare',
    description: 'Automotive service scheduling'
  },
  {
    id: 'agent_f505f23fdcda8e1ce0c1da509a',
    name: 'Real Estate',
    description: 'Property inquiries & showings'
  },
  {
    id: 'agent_18e1bd3c4522eddbcbd2f534e4',
    name: 'Medical',
    description: 'Healthcare appointments'
  },
  {
    id: 'agent_94e78bae3e80e19ea1de58cfde',
    name: 'Law Firm',
    description: 'Legal consultations'
  },
  {
    id: 'agent_504221fd9984ba67a933edb15a',
    name: 'Spa & Salon',
    description: 'Beauty & wellness booking'
  },
  {
    id: 'agent_de71e1886ab931ecd2641751ba',
    name: 'Fitness & Gym',
    description: 'Membership & classes'
  }
];

/**
 * Create a Retell Web Call
 * @param agentId - The Retell agent ID to use for the call
 * @returns Call details including access_token and call_id
 */
export async function createRetellWebCall(agentId: string): Promise<RetellWebCallResponse> {
  const apiKey = import.meta.env.VITE_RETELL_API_KEY;

  if (!apiKey) {
    throw new Error('Retell API key is not configured');
  }

  try {
    const response = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: agentId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create web call: ${response.statusText}`);
    }

    const data: RetellWebCallResponse = await response.json();

    console.log('✅ Web Call Created:', {
      call_id: data.call_id,
      agent_id: data.agent_id,
      call_status: data.call_status
    });

    return data;
  } catch (error) {
    console.error('❌ Error creating Retell web call:', error);
    throw error;
  }
}

/**
 * Get agent information by ID
 */
export function getAgentById(agentId: string): RetellAgent | undefined {
  return RETELL_AGENTS.find(agent => agent.id === agentId);
}
