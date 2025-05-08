import dynamic from "next/dynamic";
import agentData from "@/data/agent-profile";
import WsPageOuter from "@/templates/layouts/ws-page-outer";

export const metadata = {
    title: "Agent Profile || Superio - Job Board React NextJS Template",
    description: "Superio - Job Board React NextJS Template",
};

const AgentSingleProfile = dynamic(() => import("./agentsingle"), { ssr: false });

export default function ProfilePage({ params }) {
    const id = params.id;
    const agent = agentData.find((item) => String(item.id) === id);

    if (!agent) {
        return (
            <WsPageOuter>
                <section className="agent-detail-section style-three">
                    <div className="auto-container">
                        <h4>Agent Not Found</h4>
                        <p>No agent found with ID: {id}</p>
                    </div>
                </section>
            </WsPageOuter>
        );
    }

    return <AgentSingleProfile params={params} />;
}