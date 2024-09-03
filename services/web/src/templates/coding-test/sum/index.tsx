export function Sum() {
    return <>
        <pre>{`
            function twoSum(nums, target) {
            const map = new Map();  // 숫자를 저장할 해시맵 생성

            for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];  // 필요한 수(complement)를 계산

            if (map.has(complement)) {
            return [map.get(complement), i];  // 필요한 수가 해시맵에 있으면 인덱스를 반환
        }

            map.set(nums[i], i);  // 현재 숫자를 해시맵에 저장
        }

            return [];  // 문제에서 항상 답이 있다고 가정했기 때문에 이 줄은 실제로 실행되지 않습니다.
        }

            // 예시 실행
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));   // 출력: [0, 1]
        `} </pre>
    </>
}
