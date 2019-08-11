# Installation

### 1 Install via npm

```bash
npm install vue-timy
```

### 2 Import and use vue-timy

#### 2a. Without options

```javascript
import Vue from 'vue';
import timy from 'vue-timy';

// Use vue-timy
Vue.use(timy);
```

#### 2b. With custom formats.

```javascript
import Vue from 'vue';
import timy from 'vue-timy';

//The following options can be overridden.
var options = {
  justNow: "Just now",
  aFewSecondsAgo: "A few seconds ago",
  secondsAgo: "seconds ago",
  aMinuteAgo: "A minute ago",
  minutesAgo: "minutes ago",
  anHourAgo: "An hour ago",
  hoursAgo: "hours ago",
  aDayAgo: "A day ago",
  daysAgo: "days ago",
  aWeekAgo: "A week ago",
  weeksAgo: "weeks ago",
  aMonthAgo: "A month ago",
  monthsAgo: "months ago",
  aYearAgo: "A year ago",
  yearsAgo: "years ago"
};

// Use vue-timy with custom formats
Vue.use(timy, options);
```