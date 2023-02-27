<template>
  <div class="calendar-wrap">
    <h2 class="month-year">4 월</h2>
    <table class="calendar">
      <thead>
      <tr>
        <th class="day-title" scope="col">Sun</th>
        <th class="day-title" scope="col">Mon</th>
        <th class="day-title" scope="col">Tue</th>
        <th class="day-title" scope="col">Wed</th>
        <th class="day-title" scope="col">Thu</th>
        <th class="day-title" scope="col">Fri</th>
        <th class="day-title" scope="col">Sat</th>
      </tr>
      </thead>
      <tbody>
      <tr class="week">
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day today"><span class="day-number">1</span></td>
      </tr>
      <tr class="week">
        <td class="day"><span class="day-number">2</span></td>
        <td class="day"><span class="day-number">3</span></td>
        <td class="day"><span class="day-number">4</span></td>
        <td class="day"><span class="day-number">5</span></td>
        <td class="day"><span class="day-number">6</span></td>
        <td class="day"><span class="day-number">7</span></td>
        <td class="day"><span class="day-number">8</span></td>
      </tr>
      <tr class="week">
        <td class="day"><span class="day-number">9</span></td>
        <td class="day"><span class="day-number">10</span></td>
        <td class="day"><span class="day-number">11</span></td>
        <td class="day"><span class="day-number">12</span></td>
        <td class="day"><span class="day-number">13</span></td>
        <td class="day"><span class="day-number">14</span></td>
        <td class="day"><span class="day-number">15</span></td>
      </tr>
      <tr class="week">
        <td class="day"><span class="day-number">16</span></td>
        <td class="day"><span class="day-number">17</span></td>
        <td class="day"><span class="day-number">18</span></td>
        <td class="day"><span class="day-number">19</span></td>
        <td class="day"><span class="day-number">20</span></td>
        <td class="day"><span class="day-number">21</span></td>
        <td class="day"><span class="day-number">22</span></td>
      </tr>
      <tr class="week">
        <td class="day"><span class="day-number">23</span></td>
        <td class="day"><span class="day-number">24</span></td>
        <td class="day"><span class="day-number">25</span></td>
        <td class="day"><span class="day-number">26</span></td>
        <td class="day"><span class="day-number">27</span></td>
        <td class="day"><span class="day-number">28</span></td>
        <td class="day"><span class="day-number">29</span></td>
      </tr>
      <tr class="week">
        <td class="day"><span class="day-number">23</span></td>
        <td class="day"><span class="day-number">24</span></td>
        <td class="day"><span class="day-number">25</span></td>
        <td class="day"><span class="day-number">26</span></td>
        <td class="day"><span class="day-number">27</span></td>
        <td class="day"><span class="day-number">28</span></td>
        <td class="day"><span class="day-number">29</span></td>
      </tr>
      <tr class="week">
        <td class="day"><span class="day-number">30</span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
        <td class="day"><span class="day-number"></span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WeddingCalendar"
}
</script>

<style lang="scss">
.calendar-wrap {
  width: 100%;
  padding: 0.75em;
  font-size: 4vw;
  user-select: none;
  box-shadow:
    0 0.0625em 0.25em rgba(0,20,50,0.2),
    0 0.5em 0.5em 0.125em rgba(0,20,50,0.1);
}

@media (min-width: 500px) {
  .calendar-wrap {
    width: 450px;
    font-size: 1.25rem;
  }
}

.month-year {
  margin-bottom: 0.75em;
  font-weight: normal;
  font-size: 1.25em;
  text-align: center;
}

.calendar {
  table-layout: fixed;
  width: 100%;
  margin-bottom: 0.75em;
  overflow: hidden;
  border-collapse: collapse;
  -webkit-tap-highlight-color: transparent;
}

.day-title {
  width: 4em;
  height: 2em;
  vertical-align: top;
  font-weight: bold;
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
}

.day {
  position: relative;
  width: 3em;
  height: 3em;
}

.day:first-child,
.day-title:first-child {
  color: #e97265;
}

.day-number {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  width: 3em;
  border-radius: 50%;
}

.day.today span.day-number {
  color: #fff;
  border: 0.25em solid transparent;
  box-shadow: inset 0 0 0 2em #c69c6c;
}
</style>
