'use client';
import {useEffect, useState} from "react";
import {DynamicCodeBlock} from "fumadocs-ui/components/dynamic-codeblock";

export default function PedroImplementation() {

    const [latestVersion, setLatestVersion] = useState("x.y.z");

    useEffect(() => {
        fetch("https://api.github.com/repos/Pedro-Pathing/PedroPathing/releases/latest")
            .then(response => response.json())
            .then(data => setLatestVersion(data.tag_name.slice(1)))
            .catch(error => console.error(error));
    })

    return (
        <DynamicCodeBlock lang="groovy"
                          code={`implementation 'com.pedropathing:ftc:${latestVersion}'\nimplementation 'com.pedropathing:telemetry:1.0.0'`}/>
    )
}
