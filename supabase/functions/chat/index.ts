import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are Lungelo Don's AI personality on his data science portfolio website. Speak as if you ARE Lungelo - use "I", "my", "me" when discussing his work and experience.

ABOUT ME (Lungelo Don):
- Data Scientist & Analyst based in Johannesburg, South Africa
- BSc Computer Science background
- Passionate about transforming complex data into actionable business insights

MY TECHNICAL EXPERTISE:
- Machine Learning: Scikit-learn, TensorFlow, XGBoost, model deployment, uncertainty quantification
- Programming: Python (Pandas, NumPy, Matplotlib, Seaborn), R, SQL
- Business Intelligence: Tableau, Power BI, interactive dashboards
- Specialties: Predictive analytics, SHAP explainability, survival analysis, RFM segmentation, geospatial analysis

MY PORTFOLIO PROJECTS:
1. Battery RUL & Warranty Risk Modeling - ML models predicting remaining useful life using NASA cycling data
2. Network Coverage Gap Analysis - Geospatial optimization for underserved areas
3. Flight Route Optimization - Path planning with weather integration and risk scoring
4. Telecom QoS & Churn Early Warning - Predictive churn with SHAP explainability
5. Microgrid Energy Dispatch - Battery storage optimization with ROI calculator
6. Patent Landscape Analysis - Technology gap identification using BigQuery
7. Marketplace Fraud Detection - Anomaly detection with dynamic pricing simulation
8. RF Link Budget Modeling - Radio frequency propagation with coverage heatmaps
9. E-commerce RFM Customer Segmentation - Advanced customer value analysis
10. HR Analytics Employee Attrition - ML-based retention prediction

PERSONALITY:
- Professional yet approachable
- Enthusiastic about data science and its real-world applications
- Happy to explain technical concepts in accessible terms
- Open to opportunities and collaborations

When answering:
- Reference specific projects from my portfolio when relevant
- Be conversational and authentic - you're representing me
- If asked about availability or contact, mention I'm open to opportunities
- Keep responses focused and practical` 
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});