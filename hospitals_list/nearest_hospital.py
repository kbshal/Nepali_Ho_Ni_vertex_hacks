from geopy import distance
import json
import sys
def get_index(nums, target):
   left, right = 0, len(nums) - 1
   ans = 0
   while left <= right:
      mid = (left + right) // 2
      if target >= nums[mid]['lat']:
         ans = mid + 1
         left = mid + 1
      else:
         right = mid - 1
   return ans

def nearest(lat:int, long:int):

    with open('hospitals_data.json','r') as f:
        
        hos = json.load(f.read)

        hos.sort(key=lambda x:x['lat'])
        idx = get_index(hos, lat)
        distances = []
        distances.append( distance.distance((hos[idx]['lat'], hos[idx]['long']),(lat,long)).km)
        distances.append( distance.distance((hos[idx-1]['lat'], hos[idx-1]['long']),(lat,long)).km)
        distances.append( distance.distance((hos[idx+1]['lat'], hos[idx+1]['long']),(lat,long)).km)

        if distances[0] < distances[1] and distances[0] < distances[2]:
            return hos[idx] 
        elif distances[1] < distances[0] and distances[1] < distances[2]: 
            return hos[idx-1]
        else:
            return hos[idx+1]

print(nearest(27.69,85.30))