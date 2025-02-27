import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLoading = () => {
return (
<SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
    <Skeleton count={4} />
    </p>
</SkeletonTheme>
)
}

export default SkeletonLoading;
