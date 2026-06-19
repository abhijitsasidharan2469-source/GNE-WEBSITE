export type Project = {
  id: string;
  title: string;
  type: "Utility-scale" | "Rooftop" | "BESS" | "Hybrid";
  location: string;
  capacity: string;
  status: "Commissioned" | "Under construction" | "Design";
  year: number;
  lat?: number;
  lng?: number;
  image: string;
  summary: string;
  description: string;
  client?: string;
  scope: string[];
  'Execution & delivery': string[];
  'Digital & O&M Solutions'?: string[];
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Solar EPC – Utility Scale",
    type: "Utility-scale",
    location: "Madhya Pradesh, India",
    capacity: "100 MWp",
    status: "Commissioned",
    year: 2024,
    lat: 22.9734,
    lng: 78.6569,
    image: "/hero-solar-farm.png",
    summary:
      "Turnkey utility-scale solar EPC delivering bankable generation assets with HSE-led execution and yield-optimized design.",
    description:
      "As a leader in Engineering, Procurement, and Construction (EPC) services for solar energy, GNE Infra excels in managing every aspect of the process while ensuring excellence in quality and efficiency at every step. We design advanced systems, source premium materials, and execute construction using innovative techniques that ensure safe, reliable, and consistent energy production. Our vast experience in commercial and industrial solar projects allows us to deliver scalable, effective solutions that are completed on time, following the highest industrial standards and best practices.",
    client: "Utility-scale IPP",
    scope: [
      "Solar & BESS Plant Design, Development & Optimization",
      "Topology & Site Feasibility Surveys",
      "PV System Modelling & Shadow Analysis",
      "Structural Design & STAD Analysis",


    ],
    'Execution & delivery': [
      "Engineering, Procurement &Construction(EPC)",
      "Testing, Commisioning & Grid Integration",
      "CEIG Approvals & Net Metering Services",
    ],
    'Digital & O&M Solutions': [

      "Centralized Monitoring Systems & IoT Integration",
      "Solar SCADA for Ground-Mounted Projects",
    ],
  },
  {
    id: "p2",
    title: "Industrial Rooftop Portfolio",
    type: "Rooftop",
    location: "NCR, India",
    capacity: "15 MWp",
    status: "Commissioned",
    year: 2023,
    lat: 28.4744,
    lng: 77.504,
    image: "/service-installation.jpg",
    summary:
      "Multi-site C&I rooftop solar portfolio with structural compliance, net-metering alignment, and rapid deployment across industrial facilities.",
    description:
      "This portfolio spans multiple industrial rooftops across the National Capital Region, combining structural assessments, custom mounting solutions, and synchronized grid integration. GNE Infra managed end-to-end delivery including regulatory approvals, net-metering coordination, and performance monitoring setup for each site.",
    client: "Industrial manufacturing group",
    scope: [
      "Structural & shadow analysis",
      "Rooftop mounting & DC/AC works",
      "Net-metering & DISCOM coordination",
      "Centralized monitoring dashboard",
    ],
    "Execution & delivery": [
      "Structural & safety compliance",
      "Net-metering alignment",
      "Rapid deployment",
    ],
    'Digital & O&M Solutions': [
      "15 MWp aggregated capacity across 6 facilities",
      "Average 18-month payback period for client",
      "Unified portfolio monitoring from day one",
    ],
  },
  {
    id: "p3",
    title: "BESS + EMS Deployment",
    type: "BESS",
    location: "Rajasthan, India",
    capacity: "50 MWh",
    status: "Under construction",
    year: 2025,
    lat: 26.9124,
    lng: 75.7873,
    image: "/hero-bess-storage.png",
    summary:
      "Grid-scale battery energy storage with EMS integration for dispatch optimization, degradation-aware operations, and real-time KPI dashboards.",
    description:
      "GNE Infra is delivering a 50 MWh BESS installation paired with an intelligent Energy Management System. The scope covers containerized battery integration, PCS and transformer works, grid interconnection, and EMS configuration for peak shaving, frequency support, and solar firming use cases.",
    client: "Renewable energy developer",
    scope: [
      "BESS system design & integration",
      "EMS configuration & SCADA",
      "Grid interconnection works",
      "Performance testing & commissioning",
    ],
    "Execution & delivery": [
      "Dispatch optimization",
      "Degradation-aware operations",
      "KPI dashboards",
    ],
    'Digital & O&M Solutions': [
      "Target COD Q4 2025",
      "Hybrid solar + storage dispatch model validated",
      "Remote monitoring & alerting from EMS go-live",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export function getProjectsWithCoords() {
  return projects.filter((p) => p.lat != null && p.lng != null);
}
