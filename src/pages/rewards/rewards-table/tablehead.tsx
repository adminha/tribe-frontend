const TableHead = () => {
    return (
        <thead>
            <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                <th className="" rowSpan={2}>Transaction ID</th>
                <th className="">Reacted To</th>
                <th className="text-end" colSpan={2}>Reward Received</th>
                <th className="text-end" >Date</th>
            </tr>
        </thead>
    );
}

export default TableHead;