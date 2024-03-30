const findMedianSortedArrays = function (nums1,nums2 ) {
    const totalStrings = nums1.length + nums2.length;
    if (totalStrings % 2 === 1) {
        return findKthElements(nums1,nums2 Math.floor(totalStrings /2 ) + 1)  
    }else{
        return (findKthElement(nums1, nums2, totalLength / 2) + findKthElement(nums1, nums2, totalLength / 2 + 1)) / 2;
    }
}

function findKthElement (nums1,nums2, k) {
    let index1 = 0;
    let index2 =0;

    while (true) {
        if (index1 === nums1.length) {
            return nums2[index2 +k -1]
            
        }
        if (k === 1) {
            return Math.min(nums1[index1],nums2[index2])
            
        }
        let half = Math.floor(k / 2);
        let nerIndex1 =Math.min(index1 + half, nums1.length -1 )
        let nerIndex2 =Math.min(index2 + half, nums2.length -1 )

        if (nums1[nerIndex1]<= nums2[nerIndex2]) {
            k - = (nerIndex1-index1 + 1)
            index1 =nerIndex1 +1
            
        }else{
            k - = (nerIndex2-index2 + 1)
            index2 =nerIndex2 +1
        }

    }
}