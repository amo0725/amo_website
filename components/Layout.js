import React from "react"

const Layout = ({children}) => {
    return (
        <>
        <div className="bg-white dark:bg-gray-800">
            {children}
        </div>
        </>
    )
}

export default Layout;