import React, { useEffect } from "react";

const NostrEmbed: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src =
          "https://cdn.jsdelivr.net/gh/nostrband/nostr-embed@0.1.16/dist/nostr-embed.js";

        script.onload = () => {
            const options = {
                showZaps: true,
                showCopyAddr: true,
                hideNostrich: false,
                showFollowing: true,
            };

            // @ts-expect-error: nostrEmbed might not have typings
            nostrEmbed.init(
                "npub105tr46lgr3zlz68sjyk4026y0ynd7uckzys0gk7jhpep54w4s50qzdv8xy",
                "#nostr-embed-npub105tr46lgr3zlz68sjyk4026y0ynd7uckzys0gk7jhpep54w4s50qzdv8xy",
                "",
                options
            );
        };

        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode?.insertBefore(script, firstScript);
    }, []);

    return (
        <div className="w-full" id="nostr-embed-npub105tr46lgr3zlz68sjyk4026y0ynd7uckzys0gk7jhpep54w4s50qzdv8xy"></div>
    );
};

export default NostrEmbed;
