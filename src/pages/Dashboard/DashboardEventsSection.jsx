import React, { useState, useEffect } from "react";
import DashboardEventCard from "../../components/Dashboard/Cards/DashboardEventCard";

const DashboardEventSection = ({  eventsData }) => {
    

    const cardComponents = React.useMemo(() => {
        return eventsData.map((eventsData) => {
            return (
                <DashboardEventCard eventsData={eventsData} />
            )
        });
    }, [eventsData]);
   



    
}
export default DashboardEventSection;
