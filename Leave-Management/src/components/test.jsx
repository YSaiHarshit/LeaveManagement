import React from 'react'
import Dashboard from './Dashboard'

const test = () => {
    return (
        <div>

            <div className="w-[20%]">
                <Dashboard />
            </div>
            <div className="w-[80%]">
                <div className="top-0 sticky">

                    <Header />
                </div>
                <div className="">
                    Page content
                </div>
            </div>

        </div>
    )
}

export default test
