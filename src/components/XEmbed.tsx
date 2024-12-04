import React, { useEffect } from "react";

const XEmbed: React.FC<{ username: string }> = ({ username }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        const container = document.getElementById("x-profile-embed");
        container?.appendChild(script);

        return () => {
            container!.innerHTML = "";
        };
    }, [username]);

    return (
        <div id="x-profile-embed">
            <a
                className="twitter-timeline"
                href={`https://twitter.com/${username}`}
                data-width="600"
                data-height="600"
            >
            </a>
        </div>
    );
};

export default XEmbed;
