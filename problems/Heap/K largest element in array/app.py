class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums = [-x for x in nums]
        heapify(nums)
        for _ in range(k - 1):
            heappop(nums)
        return -nums[0]