<template>
  <div class="w-full bg-[#CAF0F8] min-h-screen flex items-center justify-center">
    <div class="w-full max-w-7xl p-5">

      <!-- top menu -->
      <div class="w-full p-3 flex gap-6 justify-center">
        <RouterLink
          v-for="label in ['Today', 'Tomorrow', 'Next 7 days']"
          :key="label"
          to="/menu"
          class="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <font-awesome-icon :icon="['fas','bars']" class="text-xs" />
          <span class="text-black text-lg font-bold">{{ label }}</span>
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 bg-[#CAF0F8] text-white">
        <div class="lg:col-span-8 space-y-4 h-140 flex w-310 flex-col gap-5">

          <!-- TOP WEATHER -->
          <div class="flex flex-col sm:flex-row gap-4">

            <!-- MAIN CARD (REAL WEATHER) -->
            <div class="sm:w-1/3 bg-[#00B4D8] border border-white/10 rounded-2xl p-4">
              <div class="flex justify-between items-start mb-4">
                <div class="pt-10">
                  <h2 class="text-lg font-bold">{{ dayName }}</h2>
                  <p class="text-sm text-white">{{ timeNow }}</p>
                </div>

                <img
                  v-if="weather"
                  :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                  class="h-20 w-20"
                  alt="weather icon"
                />
              </div>

              <div v-if="weather" class="text-4xl font-black mb-1">
                {{ Math.round(weather.main.temp) }}°
              </div>

              <p v-if="weather" class="text-sm text-white">
                {{ weather.name }},
              </p>

              <p v-if="weather" class="text-sm text-white">
                Real Feel {{ Math.round(weather.main.feels_like) }}°
              </p>
            </div>

            <!-- WEEK PREVIEW (DYNAMIC) -->
            <div v-if="weekly.length" class="flex-grow flex justify-between bg-[#00B4D8] border border-white/10 rounded-2xl p-10 overflow-x-auto">
              <div
                v-for="(day, index) in weekly"
                :key="day.dt + index"
                class="flex flex-col items-center justify-center p-2 min-w-[50px]"
              >
                <span class="text-white text-md mb-1">
                  {{ new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }) }}
                </span>
                <img
                  :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
                  class="h-20 w-20"
                  alt="day icon"
                />
                <span class="font-bold text-sm flex flex-col ">
                  {{ day.temp.day !== null ? Math.round(day.temp.day) : '--' }}° 
                </span>
              </div>
            </div>
          </div>

          <!-- NEARBY PROVINCES -->
          <div class="border border-white/10 flex flex-row bg-[#CAF0F8] p-4 h-[300px] items-center justify-center gap-10 relative">
            <div class="lg:col-span-4 space-y-4 w-100">
              <div class="space-y-2 flex flex-col gap-2">
                <h3 class="text-sm font-bold px-1 uppercase text-gray-500 tracking-widest">
                  Weather
                </h3>

                <div
                  v-for="item in weatherDetails"
                  :key="item.label"
                  class="flex justify-between items-center bg-[#00B4D8] p-3 rounded-xl border border-white/10"
                >
                  <div>
                    <p class="font-bold text-md">{{ item.label }}</p>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="text-md font-bold">{{ item.value }}</span>
                  </div>
                </div>

              </div>
            </div>

            <div class="lg:col-span-4 space-y-4 w-100">
              <div class="space-y-2 flex flex-col gap-2">
                <h3 class="text-sm font-bold px-1 uppercase text-gray-500 tracking-widest">
                  Nearby Province
                </h3>

                <div
                  v-for="prov in nearbyCities"
                  :key="prov.name"
                  class="flex justify-between items-center bg-[#00B4D8] p-3 rounded-xl border border-white/10"
                >
                  <div>
                    <p class="font-bold text-md">{{ prov.name }}</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <img :src="`https://openweathermap.org/img/wn/${prov.icon}@2x.png`" class="h-6 w-6" />
                    <span class="text-xl font-bold">{{ prov.temp }}°</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"

/* STATE */
const weather = ref(null)
const weekly = ref([])
const nearbyCities = ref([])
const weatherDetails = ref([])

/* TIME */
const dayName = computed(() =>
  new Date().toLocaleDateString("en-US", { weekday: "long" })
)
const timeNow = computed(() =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
)

/* ICON MAP */
const mapWeatherCodeToIcon = (code) => {
  if (code === 0) return "01d"
  if ([1, 2].includes(code)) return "02d"
  if (code === 3) return "04d"
  if ([45, 48].includes(code)) return "50d"
  if ([51,53,55,61,63,65].includes(code)) return "10d"
  if ([71,73,75].includes(code)) return "13d"
  return "01d"
}

/* REVERSE GEO */
const fetchCityName = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    )
    const data = await res.json()
    const city = data.address.city || data.address.town || data.address.village || "Unknown"
    const state = data.address.state || ""
    const country = data.address.country || ""
    const displayName = state ? `${city}, ${state}` : city
    return { name: displayName, city, state, country, lat, lon }
  } catch (err) {
    console.error("Reverse geocoding failed:", err)
    return { name: "Unknown", city: "Unknown", state: "", country: "", lat, lon }
  }
}

/* FETCH MAIN WEATHER */
const fetchWeather = async (lat, lon, nameOverride = null) => {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,weathercode&timezone=auto`
    )
    const data = await res.json()
    return {
      main: { temp: data.current_weather.temperature, feels_like: data.current_weather.temperature, humidity: "--" },
      weather: [{ icon: mapWeatherCodeToIcon(data.current_weather.weathercode) }],
      name: nameOverride || "Unknown",
      sys: { country: "" },
      daily: data.daily
    }
  } catch (err) {
    console.error("Weather fetch failed:", err)
    return {
      main: { temp: "--", feels_like: "--", humidity: "--" },
      weather: [{ icon: "01d" }],
      name: nameOverride || "Unknown",
      sys: { country: "" },
      daily: { time: [], temperature_2m_max: [], weathercode: [] }
    }
  }
}

/* FETCH WEATHER DETAILS */
const API_KEY = "cf3227c5d49cdc2b392aec200d26cff0"

const fetchWeatherDetails = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
    const data = await res.json()
    weatherDetails.value = [
      { label: "Wind", value: Math.round(data.wind.speed * 3.6) + " km/h" },
      { label: "Feels Like", value: Math.round(data.main.feels_like) + "°" },
      { label: "Humidity", value: data.main.humidity + "%" },
      { label: "Pressure", value: data.main.pressure + " hPa" }
    ]
  } catch (err) {
    console.error("Weather details fetch failed:", err)
    weatherDetails.value = []
  }
}

/* FETCH NEARBY CITIES (3 UNIQUE, EXCLUDE MAIN CITY) */
const fetchNearbyCities = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=10&units=metric&appid=${API_KEY}`
    )
    const data = await res.json()

    const uniqueCities = []
    data.list.forEach(city => {
      const cityName = city.name
      if (
        cityName.toLowerCase() !== weather.value.name.toLowerCase() &&
        !uniqueCities.some(c => c.name.toLowerCase() === cityName.toLowerCase())
      ) {
        uniqueCities.push({
          name: cityName,
          temp: Math.round(city.main.temp),
          icon: city.weather[0].icon
        })
      }
    })

    nearbyCities.value = uniqueCities.slice(0, 3)
  } catch (err) {
    console.error("Nearby cities fetch failed:", err)
    nearbyCities.value = []
  }
}

/* DETECT REAL LOCATION */
const detectLocation = () => {
  if (!navigator.geolocation) {
    fetchWeather(11.5564, 104.9282).then((w) => (weather.value = w))
    fetchWeatherDetails(11.5564, 104.9282)
    fetchNearbyCities(11.5564, 104.9282)
    return
  }

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const cityData = await fetchCityName(lat, lon)

    // main weather
    weather.value = await fetchWeather(lat, lon, cityData.name)

    // weekly forecast
    weekly.value = weather.value.daily.time.map((date, i) => ({
      dt: new Date(date).getTime() / 1000,
      temp: { day: weather.value.daily.temperature_2m_max[i] },
      weather: [{ icon: mapWeatherCodeToIcon(weather.value.daily.weathercode[i]) }]
    }))

    // nearby cities (only 3 unique)
    fetchNearbyCities(lat, lon)

    // sidebar weather
    fetchWeatherDetails(lat, lon)
  }, () => {
    fetchWeather(11.5564, 104.9282).then((w) => (weather.value = w))
    fetchWeatherDetails(11.5564, 104.9282)
    fetchNearbyCities(11.5564, 104.9282)
  })
}

onMounted(detectLocation)
</script>
