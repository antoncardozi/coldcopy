interface Env {
  OPENAI_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const { subject, body } = await context.request.json() as { subject: string; body: string };

    if (!body) {
      return new Response(JSON.stringify({ error: 'Email body is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const apiKey = context.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'AI scoring not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const prompt = `You are an expert cold email coach. Score this cold email out of 100 across these categories. Return ONLY valid JSON, no markdown.

Subject: ${subject || '(none provided)'}
Body: ${body}

Return this exact JSON structure:
{
  "total": <number 0-100>,
  "cats": [
    {
      "name": "Subject Line",
      "max": 20,
      "score": <number 0-20>,
      "tips": [{"type": "good"|"bad"|"info", "text": "<specific tip>"}]
    },
    {
      "name": "Personalization",
      "max": 15,
      "score": <number 0-15>,
      "tips": [{"type": "good"|"bad"|"info", "text": "<specific tip>"}]
    },
    {
      "name": "Value Proposition",
      "max": 25,
      "score": <number 0-25>,
      "tips": [{"type": "good"|"bad"|"info", "text": "<specific tip>"}]
    },
    {
      "name": "CTA Clarity",
      "max": 20,
      "score": <number 0-20>,
      "tips": [{"type": "good"|"bad"|"info", "text": "<specific tip>"}]
    },
    {
      "name": "Spam Risk",
      "max": 10,
      "score": <number 0-10>,
      "tips": [{"type": "good"|"bad"|"info", "text": "<specific tip>"}]
    },
    {
      "name": "Length & Readability",
      "max": 10,
      "score": <number 0-10>,
      "tips": [{"type": "good"|"bad"|"info", "text": "<specific tip>"}]
    }
  ]
}

Be specific and actionable in tips. Reference actual phrases from the email. Each category should have 2-4 tips.`;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 1500,
      }),
    });

    if (!res.ok) {
      console.error('OpenAI error:', await res.text());
      return new Response(JSON.stringify({ error: 'AI scoring failed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const completion = await res.json() as any;
    const content = completion.choices[0].message.content;
    
    // Parse the JSON from the response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return new Response(JSON.stringify({ error: 'Failed to parse AI response' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const scoreData = JSON.parse(jsonMatch[0]);

    return new Response(JSON.stringify(scoreData), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message || 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
