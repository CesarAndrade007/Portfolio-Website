import { Metadata } from "next";

type Props = {
    params: {
        projectId: string;
    }
}

export const generateMetadata = (({ params }: Props): Metadata => {
    return {
        title: `${params.projectId}`
    }
})

export default function ProjectDetails( { params, } : {
    params: { projectId: string }
}) {
    return <h1>{ params.projectId }</h1>;
}