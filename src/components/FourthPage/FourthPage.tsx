import './FourthPage.css'



const WEEKDAYS = ['Երկ', 'Երբ', 'Չրք', 'Հնգ', 'Ուրբ', 'Շբթ', 'Կիր']



const YEAR = 2026

const MONTH = 7 // August (0-indexed)

const WEDDING_DAY = 16



function buildCalendarDays() {

  const firstDay = new Date(YEAR, MONTH, 1).getDay()

  const mondayStart = firstDay === 0 ? 6 : firstDay - 1

  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate()



  const cells: (number | null)[] = Array(mondayStart).fill(null)

  for (let day = 1; day <= daysInMonth; day++) {

    cells.push(day)

  }



  while (cells.length % 7 !== 0) {

    cells.push(null)

  }



  return cells

}



const CALENDAR_DAYS = buildCalendarDays()



export default function FourthPage() {

  return (

    <section className="fourth-page">

      <h2 className="fourth-page__title">

        Սիրելի{'\u00A0'}հյուրեր

      </h2>



      <p className="fourth-page__text">

        Սիրով հրավիրում ենք Ձեզ մեր կյանքի կարևորագույն և հիշարժան օրը մեզ հետ կիսելու,

        և ուրախ կլինենք եթե այս երջանիկ օրը անցկացնեք մեզ հետ նվիրելով Ձեր ներկայությամբ:

      </p>



      <div className="fourth-page__divider" aria-hidden>

        <img

          className="fourth-page__divider-img"

          src="/svg/vznoc.svg"

          alt=""

        />

      </div>



      <div className="fourth-page__calendar">

        <h3 className="fourth-page__month">Օգոստոս</h3>



        <div className="fourth-page__weekdays">

          {WEEKDAYS.map((day) => (

            <span key={day} className="fourth-page__weekday">

              {day}

            </span>

          ))}

        </div>



        <div className="fourth-page__days">

          {CALENDAR_DAYS.map((day, index) => {

            if (day === WEDDING_DAY) {

              return (

                <span key={index} className="fourth-page__day fourth-page__day--wedding">

                  <img

                    className="fourth-page__heart"

                    src="/svg/heart5.svg"

                    alt=""

                    aria-hidden

                  />

                  <span className="fourth-page__day-number">16</span>

                </span>

              )

            }



            return (

              <span

                key={index}

                className={`fourth-page__day${day === null ? ' fourth-page__day--empty' : ''}`}

              >

                {day ?? ''}

              </span>

            )

          })}

        </div>

      </div>

    </section>

  )

}


