import './AddButton.css'


function AddButton() {

  
  return (
    <button className="add-button" type="submit">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="30" height="30" fill="url(#pattern0_111_699)"/>
        <defs>
          <pattern id="pattern0_111_699" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_111_699" transform="scale(0.01)"/>
          </pattern>
          <image id="image0_111_699" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHZUlEQVR4nO2dZ4xVRRSAB5ClJKDIX+qi/lHRiC1KL+IaS1TsgmAsMaDGGINRsWMJgkH/WGiyMRJLTDD+IiYaQSWiIkYRdUVFRKUoKG1Z+czJOyTXce7y3tv77p25737JJpt9OzNnZt60M2fOMaagoKCgoCCnAN2Bk4HLgVnAy8CHwDqgBdgB7NefHfo3+ewD/d9Zmlby6J51fYIDOAIYBswEVgB7SY4DwBrgCWA80C3r+noJ0FkbaCnwF+khZb0EjBMZTL0DDNBv6yayZxPwuMhk6g3gWGAh0FpmY7UAy4E5wI3ASOAEYDDQB+iqP330b/LZKP1fSfOW5lEOshYtAI4xeQdoBF4B2g7TKD8Bi4HJQL8Ey+8HTAGWlDEq23RTMNjkDf323g783U4D7NQ1RNaSTinJJZuH+cC2duTaAzyYmw0AcA7wTTsV/lK/tT0ylLGHyiCyxLFBviwm8O2rfLP+iangWm2ELsYTgE7ABcDqGJkP6ohqMCEBDGqnUpuBK4znAFeprC7kYDrQhADQBPwRcyibB/QygQD0Bp5W2W1EKzDR+IxOQa6trKwhp5hAobT4f+uol9T1WuMjwG0x68UbwFEmcIBeumV3rSt3GZ8AHo2Zom4xOQOYHjOFPWJ8AJjhEG4fcInJKZR2Yrsd9b4za8GucUxTsqAPNzkHOAPY6pi+pma5m2p17DyGmjoBGKp1jtKa+u5LtbTbHSqG3I+MmJFiq4SkkwaZFPVSchtnK+IuNnUKcL5joV+dyoleD3c2udtNJbS5mVPrQifowhVlWU0LDQjgNcciP65WhXUDvrYKlNNr75oUGO7hUbTCtpYiedU9cL9V0IGQ1SG1AjjNcQF3T9KFDHQchOYmWkiOoKSit3egyd08OnQ4m0PS2qYNcCSwxWqz5qQyP84xBL2/z8ga1WLYU/yQJDJeZGX8aVp33qEDfGK13QsdzbC/msVEqdsDYKWoCautVqn+plGN2KKIEUBh4VeZReZ6qw0f60hmtu3SlKoyq2OAqVYb/ljVl1rto6L8maWpThzARcDvwG/AhcYzgJ7ALqstx1aTkRitRVlgPIT/Wob8bDxErTCjLK40gwaHFfpI4yFYGA+REeGw0uxaSQYjHLa2Xm51CaNDOjtsvM6uJAOxOIyyyHgKAXRIzBJwXyWJ37MSTzaeQjgdMs0S9Z1KDI/FaiRKYk8C6rhDBlii7i3rzaM+jozSYjyGQDpEADZa4h7eIEQUh1ai5cZjCKtD3rbEnVTNRVRt74Xrq0PmWeLeW04iecYV5QbjMYTVITdb4i4tJ9EqK9Eo4zGE1SFjLHHfLyfRF1ai443HEFaHiKVjlM/LSfSDlcjrl0KE1SHyZDvK9+Uksl+k9k1J2PMc28I0kDKbUqpjX6vsreUksm8IU3ngqPqyrEhFS6y2bVH2lZOo6BDPOiSrKatJ5lTSR8o81+cpq1jUPVvUi22vZ9velVai4mCY8cGwUJ14pjoplIueKRcL9btn6veTrETFBVVCODQRJ5brltW+wu1vPIVAOkTf2NhXuOW9rALeDcWElHA65PqqjBw08QMdsrRLEcLpkOaKF/RI4uFWYjG6LgzlOmYo94sl6lmVmpLuCuGASBgdIo6aqzcl1UzE43MIxtYbK9INZYC6pY2yMKle9fE5QpNOqZvS0tom8BxhTDUZFQ92fHqwo5mJL/QoxZO2jj9pm530o8/ceopLGocaqrXDzv7VMX2Uz3zdAvuEOmW2n0U/l0TGQxy+oK5MROocQymQQJS2xCIuOO5I5JBTeAFq37XGrxXffVT4tsF2YzcvsQJyBvCs1Va7E3f5J7oXqxCZxoYlWkgOAE53+Ia5uxYFNTi2cN/J8Ey8sEARD96OSD4bahZ7RJ0J2C7+Xq1JYQECvG61zcGqTuUVFvoU/2e6qXMo+b63eTKtQC32G5K2ej4wUnI9bh8NPqpYo9vBE/w2hxu7EabOAM50uD9Mz5FyRJCJhatxXK7GRdU0IcuwQC5n/CPq2Bn/dT7E07ARq5VLTb7XjD2Oet9hfAB42CGcLHIzTD53U22O+j5kfAK4NSbk0ZsSEtUEDqUAYcuCCHl0CAmQFRMUTE70p5qw1SEtjnrJAn618RndfdmxRdBhPj8kVQslre0zMVPUtsx2U1WaTUrwRRdb1MlwJ88vlyY7vFMfYpXP5rXVhl5d52Ho1c66g/r4MKFX0zmB1wI1J7LDXERZr5YZPTM21Znm0GZH+armisIMwnfbjjWj7BHNsX5Du6Q0GsRk9nmH3VSU3bkK3+0IWtwcE5jRviJeqiNnQMJr2zSVwba1tTmgMiRWvreo4cSLDhOjODbq66O5wE3AaNUjNQJH6+VZg/7eqJ+N1jd9czVtuW479uuoaTT1hmqNZ2fsxSFqUTjbZ/+SqaHz+Vg1ShYb4rTYqeE4ZDQVFpkugC4aLnsmsEKffiWFrAtrNOrD+LT8uOQKSg5bZE24TC1fmtW5wVpVZ2zXeX+//t6in63URVnSTNI88rdTKigoKCgoMCX+BZrbqkwyROFpAAAAAElFTkSuQmCC"/>
        </defs>
      </svg>
      Add
    </button>
  );
}

export default AddButton;
