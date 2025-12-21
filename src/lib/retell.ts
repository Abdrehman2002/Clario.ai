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
    id: 'agent_68d22a69f45a3ee37168684831',
    name: 'AutoCare',
    description: 'Automotive service scheduling'
  },
  {
    id: 'agent_71d88e63296903b65f6dc0d372',
    name: 'Real Estate',
    description: 'Property inquiries & showings'
  },
  {
    id: 'agent_8ce17d51123f73b631cb29c6e0',
    name: 'Medical',
    description: 'Healthcare appointments'
  },
  {
    id: 'agent_2c8c98f3046de28c6c9d7fa086',
    name: 'Law Firm',
    description: 'Legal consultations'
  },
  {
    id: 'agent_26634c1417075ff72793ffe658',
    name: 'Spa & Salon',
    description: 'Beauty & wellness booking'
  },
  {
    id: 'agent_6ecbb6ef0fa72411251e18a0a1',
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
