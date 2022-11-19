import CreateTab from "../tabs/CreateTab";


function Welcome(useSemiPersistentState) {

    const msg = "Mikey";

    return (
        <>
            <h1>Welcome {msg}!</h1>
            <h2>What would you like to get done today?</h2>
            <CreateTab useSemiPersistentState={useSemiPersistentState} />
        </>
    );
}
export default Welcome;