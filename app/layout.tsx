import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Health Dashboard",
    "one_liner": "Visualize the security posture of your smart contracts in real-time.",
    "why_now": "With the rise in blockchain adoption, the demand for accessible security assessments is crucial.",
    "novel_mechanism": "Utilizes anomaly detection in transaction patterns to predict vulnerabilities.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Identify at-risk contracts before they are exploited",
      "Connect audits with real-time market changes"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "dashboard UI",
        "real-time monitoring",
        "alert system"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "Chart.js",
        "Node.js"
      ],
      "data_bootstrap": [
        "public blockchain data",
        "smart contract analysis reports"
      ],
      "risk": [
        "data accuracy",
        "user trust"
      ],
      "mitigation": [
        "implement redundancy checks",
        "show source credibility"
      ]
    },
    "go_to_market": {
      "hooks": [
        "display live security incidents",
        "before/after case studies"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "Discord"
      ],
      "pricing": {
        "free": "basic monitoring",
        "pro": "$15/month for advanced features",
        "business": "$100/month for enterprise solutions"
      }
    },
    "moat": [
      "early user adoption",
      "network effects from aggregated smart contract data"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "This focuses on providing visual insights which are often overlooked, targeting both developers and investors."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}