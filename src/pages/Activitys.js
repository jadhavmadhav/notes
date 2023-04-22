import React, { memo } from 'react';
import Listing from '../component/listing/Listing';

const Activitys = () => {
  console.log("Activitys page")

    return (
        <div>
            <Listing />
        </div>
    );
}

export default memo(Activitys);
