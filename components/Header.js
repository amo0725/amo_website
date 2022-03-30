import React from "react"

const Header = () => {
    return (
        <>
            <link rel="icon" href="/favicon.ico"/>
            <meta property="og:type" content="website"></meta>
            <meta name="image" property="og:image" content="/myWebsite.png"></meta>
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="320" />
            <meta name="description" property="og:description" content="Amo Feng's Personal Website - I'm a Full-Stack Developer with a bachelor of science in Computer Science & Information Engineering from Tamkang University . Currently working at IDCtech in Taiwan."></meta>
            <meta name="author" content="Amo Feng"></meta>
        </>
    )
}

export default Header;