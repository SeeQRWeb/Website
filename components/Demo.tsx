import gif from '../assets/config_demo2.gif';

const Demo = () => {
    const height = 10;
    return (
        <div>
            <div className='flex'>
                <div className="LContainer px-32">
                    <h1 className="text-3xl"><u>Cross-Database Comparisons</u></h1>
                    <h4 className="">One of the key features of SeeQR is to compare the 
                        efficiency of the executinguser-inputted queries against 
                        different databases. This allows customization of table scale,
                        relationship type, and the queries themselves within the context of each database.
                    </h4>
                    <h4 className="">
                        This flexibility affords the user granular adjustments for testing
                        every edsired scenario. Please refer to "Interface & Features" for
                        more details on execution.
                    </h4>
                </div>
                <img src = {gif.src} height = {height}/>
            </div>
            <div className = 'flex'>
                <img src = {gif.src} height = {height}/>
                <div className="LContainer px-32">
                    <h1 className="text-3xl"><u>Creating New Databases</u></h1>
                    <h4 className="">This flexibility affords the user granular adjustments for testing every edsired scenario. Please refer to "Interface & Features" for more details on execution.</h4>
                </div>
            </div>
        </div>
    );
};

export default Demo;

