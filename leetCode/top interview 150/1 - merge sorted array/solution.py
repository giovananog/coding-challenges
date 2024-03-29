class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """

        j = 0
        for i in range(m+n):
            if nums1[i] == 0 and j < n:
                nums1[i] = nums2[j]
                j = j + 1
        nums1.sort()