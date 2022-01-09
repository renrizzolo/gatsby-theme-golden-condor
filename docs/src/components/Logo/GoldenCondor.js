import React from "react";
import { Flex } from "theme-ui";

const GoldenCondor = ({ color, sx }) => {
  return (
    <Flex
      sx={{
        ...sx,
        svg: {
          fill: color ?? "primary.1",
          width: "100%",
          height: "auto",
        },
      }}
    >
      <svg
        width="176"
        height="59"
        viewBox="0 0 176 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25.475 10.23C25.7317 10.23 25.9533 10.3233 26.14 10.51C26.3267 10.6967 26.42 10.9183 26.42 11.175V14.885C26.42 18.4317 25.2067 21.0683 22.78 22.795C20.3767 24.4983 17.1917 25.35 13.225 25.35C9.25833 25.35 6.06167 24.4983 3.635 22.795C1.23167 21.0683 0.0300001 18.4083 0.0300001 14.815V10.685C0.0300001 8.305 0.613333 6.33333 1.78 4.77C2.94667 3.18333 4.52167 2.01667 6.505 1.27C8.48833 0.523332 10.7283 0.149999 13.225 0.149999C16.2117 0.149999 18.6733 0.639999 20.61 1.62C22.5467 2.6 23.9467 3.70833 24.81 4.945C25.6967 6.18167 26.14 7.185 26.14 7.955C26.14 8.165 26.0583 8.35167 25.895 8.515C25.755 8.655 25.58 8.725 25.37 8.725H17.46C16.9933 8.725 16.655 8.59667 16.445 8.34C15.7217 7.43 14.6483 6.975 13.225 6.975C12.1517 6.975 11.2533 7.22 10.53 7.71C9.83 8.2 9.48 8.83 9.48 9.6V15.55C9.48 16.4833 9.83 17.2183 10.53 17.755C11.23 18.2683 12.1283 18.525 13.225 18.525C14.6717 18.525 15.7333 18.28 16.41 17.79C17.11 17.2767 17.4717 16.6817 17.495 16.005H15.325C15.0683 16.005 14.8467 15.9117 14.66 15.725C14.4733 15.5383 14.38 15.3167 14.38 15.06V11.175C14.38 10.9183 14.4733 10.6967 14.66 10.51C14.8467 10.3233 15.0683 10.23 15.325 10.23H25.475ZM55.6313 14.885C55.6313 18.455 54.4413 21.0917 52.0613 22.795C49.7047 24.4983 46.5547 25.35 42.6113 25.35C38.668 25.35 35.5063 24.4983 33.1263 22.795C30.7697 21.0917 29.5913 18.4317 29.5913 14.815V10.685C29.5913 8.305 30.1513 6.33333 31.2713 4.77C32.4147 3.18333 33.9663 2.01667 35.9263 1.27C37.8863 0.523332 40.1147 0.149999 42.6113 0.149999C45.108 0.149999 47.3247 0.523332 49.2613 1.27C51.2213 2.01667 52.773 3.17167 53.9163 4.735C55.0597 6.29833 55.6313 8.25833 55.6313 10.615V14.885ZM39.0413 15.55C39.0413 16.5067 39.3563 17.2417 39.9863 17.755C40.6397 18.2683 41.5147 18.525 42.6113 18.525C43.708 18.525 44.5713 18.2683 45.2013 17.755C45.8547 17.2183 46.1813 16.4717 46.1813 15.515V9.985C46.1813 9.02833 45.8547 8.29333 45.2013 7.78C44.5713 7.24333 43.708 6.975 42.6113 6.975C41.5147 6.975 40.6397 7.23167 39.9863 7.745C39.3563 8.25833 39.0413 8.99333 39.0413 9.95V15.55ZM83.7577 17.825C84.0143 17.825 84.236 17.9183 84.4227 18.105C84.6093 18.2917 84.7027 18.5133 84.7027 18.77V24.055C84.7027 24.3117 84.6093 24.5333 84.4227 24.72C84.236 24.9067 84.0143 25 83.7577 25H63.3177C63.061 25 62.8393 24.9067 62.6527 24.72C62.466 24.5333 62.3727 24.3117 62.3727 24.055V1.445C62.3727 1.18833 62.466 0.966666 62.6527 0.779999C62.8393 0.593332 63.061 0.499998 63.3177 0.499998H70.8777C71.1343 0.499998 71.356 0.593332 71.5427 0.779999C71.7293 0.966666 71.8227 1.18833 71.8227 1.445V17.825H83.7577ZM101.979 0.499998C105.922 0.499998 109.072 1.35167 111.429 3.055C113.809 4.75833 114.999 7.395 114.999 10.965V14.535C114.999 18.175 113.821 20.835 111.464 22.515C109.131 24.1717 105.969 25 101.979 25H90.814C90.5573 25 90.3357 24.9067 90.149 24.72C89.9623 24.5333 89.869 24.3117 89.869 24.055V1.445C89.869 1.18833 89.9623 0.966666 90.149 0.779999C90.3357 0.593332 90.5573 0.499998 90.814 0.499998H101.979ZM102.154 18.175C103.251 18.175 104.114 17.9183 104.744 17.405C105.397 16.8683 105.724 16.1217 105.724 15.165V10.335C105.724 9.37833 105.397 8.64333 104.744 8.13C104.114 7.59333 103.251 7.325 102.154 7.325H98.969V18.175H102.154ZM143.16 18.175C143.417 18.175 143.639 18.2683 143.825 18.455C144.012 18.6417 144.105 18.8633 144.105 19.12V24.055C144.105 24.3117 144.012 24.5333 143.825 24.72C143.639 24.9067 143.417 25 143.16 25H121.04C120.784 25 120.562 24.9067 120.375 24.72C120.189 24.5333 120.095 24.3117 120.095 24.055V1.445C120.095 1.18833 120.189 0.966666 120.375 0.779999C120.562 0.593332 120.784 0.499998 121.04 0.499998H142.81C143.067 0.499998 143.289 0.593332 143.475 0.779999C143.662 0.966666 143.755 1.18833 143.755 1.445V6.38C143.755 6.63667 143.662 6.85833 143.475 7.045C143.289 7.23167 143.067 7.325 142.81 7.325H129.195V9.53H140.885C141.142 9.53 141.364 9.62333 141.55 9.81C141.737 9.99667 141.83 10.2183 141.83 10.475V15.025C141.83 15.2817 141.737 15.5033 141.55 15.69C141.364 15.8767 141.142 15.97 140.885 15.97H129.195V18.175H143.16ZM172.512 0.499998C172.768 0.499998 172.99 0.593332 173.177 0.779999C173.363 0.966666 173.457 1.18833 173.457 1.445V24.055C173.457 24.3117 173.363 24.5333 173.177 24.72C172.99 24.9067 172.768 25 172.512 25H166.877C166.317 25 165.85 24.755 165.477 24.265L157.847 14.535V24.055C157.847 24.3117 157.753 24.5333 157.567 24.72C157.38 24.9067 157.158 25 156.902 25H150.392C150.135 25 149.913 24.9067 149.727 24.72C149.54 24.5333 149.447 24.3117 149.447 24.055V1.445C149.447 1.18833 149.54 0.966666 149.727 0.779999C149.913 0.593332 150.135 0.499998 150.392 0.499998H156.062C156.622 0.499998 157.077 0.733332 157.427 1.2L165.057 11.735V1.445C165.057 1.18833 165.15 0.966666 165.337 0.779999C165.523 0.593332 165.745 0.499998 166.002 0.499998H172.512ZM9.655 48.55C9.655 49.5067 9.97 50.2417 10.6 50.755C11.2533 51.2683 12.1283 51.525 13.225 51.525C14.205 51.525 14.9283 51.3617 15.395 51.035C15.8617 50.7083 16.2583 50.2183 16.585 49.565C16.8883 48.9583 17.2967 48.655 17.81 48.655H25.37C25.58 48.655 25.755 48.7367 25.895 48.9C26.0583 49.04 26.14 49.215 26.14 49.425C26.14 50.8483 25.6617 52.2483 24.705 53.625C23.7483 54.9783 22.29 56.11 20.33 57.02C18.3933 57.9067 16.025 58.35 13.225 58.35C10.7283 58.35 8.5 57.9767 6.54 57.23C4.60333 56.46 3.06333 55.2933 1.92 53.73C0.776667 52.1433 0.205 50.1717 0.205 47.815V43.685C0.205 41.3283 0.776667 39.3683 1.92 37.805C3.06333 36.2183 4.60333 35.0517 6.54 34.305C8.5 33.535 10.7283 33.15 13.225 33.15C16.025 33.15 18.3933 33.605 20.33 34.515C22.29 35.4017 23.7483 36.5333 24.705 37.91C25.6617 39.2633 26.14 40.6517 26.14 42.075C26.14 42.285 26.0583 42.4717 25.895 42.635C25.755 42.775 25.58 42.845 25.37 42.845H17.81C17.2967 42.845 16.8883 42.5417 16.585 41.935C16.2583 41.2817 15.8617 40.7917 15.395 40.465C14.9283 40.1383 14.205 39.975 13.225 39.975C12.1283 39.975 11.2533 40.2317 10.6 40.745C9.97 41.2583 9.655 41.9933 9.655 42.95V48.55ZM55.6313 47.885C55.6313 51.455 54.4413 54.0917 52.0613 55.795C49.7047 57.4983 46.5547 58.35 42.6113 58.35C38.668 58.35 35.5063 57.4983 33.1263 55.795C30.7697 54.0917 29.5913 51.4317 29.5913 47.815V43.685C29.5913 41.305 30.1513 39.3333 31.2713 37.77C32.4147 36.1833 33.9663 35.0167 35.9263 34.27C37.8863 33.5233 40.1147 33.15 42.6113 33.15C45.108 33.15 47.3247 33.5233 49.2613 34.27C51.2213 35.0167 52.773 36.1717 53.9163 37.735C55.0597 39.2983 55.6313 41.2583 55.6313 43.615V47.885ZM39.0413 48.55C39.0413 49.5067 39.3563 50.2417 39.9863 50.755C40.6397 51.2683 41.5147 51.525 42.6113 51.525C43.708 51.525 44.5713 51.2683 45.2013 50.755C45.8547 50.2183 46.1813 49.4717 46.1813 48.515V42.985C46.1813 42.0283 45.8547 41.2933 45.2013 40.78C44.5713 40.2433 43.708 39.975 42.6113 39.975C41.5147 39.975 40.6397 40.2317 39.9863 40.745C39.3563 41.2583 39.0413 41.9933 39.0413 42.95V48.55ZM83.3027 33.5C83.5593 33.5 83.781 33.5933 83.9677 33.78C84.1543 33.9667 84.2477 34.1883 84.2477 34.445V57.055C84.2477 57.3117 84.1543 57.5333 83.9677 57.72C83.781 57.9067 83.5593 58 83.3027 58H77.6677C77.1077 58 76.641 57.755 76.2677 57.265L68.6377 47.535V57.055C68.6377 57.3117 68.5443 57.5333 68.3577 57.72C68.171 57.9067 67.9493 58 67.6927 58H61.1827C60.926 58 60.7043 57.9067 60.5177 57.72C60.331 57.5333 60.2377 57.3117 60.2377 57.055V34.445C60.2377 34.1883 60.331 33.9667 60.5177 33.78C60.7043 33.5933 60.926 33.5 61.1827 33.5H66.8527C67.4127 33.5 67.8677 33.7333 68.2177 34.2L75.8477 44.735V34.445C75.8477 34.1883 75.941 33.9667 76.1277 33.78C76.3143 33.5933 76.536 33.5 76.7927 33.5H83.3027ZM101.979 33.5C105.922 33.5 109.072 34.3517 111.429 36.055C113.809 37.7583 114.999 40.395 114.999 43.965V47.535C114.999 51.175 113.821 53.835 111.464 55.515C109.131 57.1717 105.969 58 101.979 58H90.814C90.5573 58 90.3357 57.9067 90.149 57.72C89.9623 57.5333 89.869 57.3117 89.869 57.055V34.445C89.869 34.1883 89.9623 33.9667 90.149 33.78C90.3357 33.5933 90.5573 33.5 90.814 33.5H101.979ZM102.154 51.175C103.251 51.175 104.114 50.9183 104.744 50.405C105.397 49.8683 105.724 49.1217 105.724 48.165V43.335C105.724 42.3783 105.397 41.6433 104.744 41.13C104.114 40.5933 103.251 40.325 102.154 40.325H98.969V51.175H102.154ZM144.84 47.885C144.84 51.455 143.65 54.0917 141.27 55.795C138.914 57.4983 135.764 58.35 131.82 58.35C127.877 58.35 124.715 57.4983 122.335 55.795C119.979 54.0917 118.8 51.4317 118.8 47.815V43.685C118.8 41.305 119.36 39.3333 120.48 37.77C121.624 36.1833 123.175 35.0167 125.135 34.27C127.095 33.5233 129.324 33.15 131.82 33.15C134.317 33.15 136.534 33.5233 138.47 34.27C140.43 35.0167 141.982 36.1717 143.125 37.735C144.269 39.2983 144.84 41.2583 144.84 43.615V47.885ZM128.25 48.55C128.25 49.5067 128.565 50.2417 129.195 50.755C129.849 51.2683 130.724 51.525 131.82 51.525C132.917 51.525 133.78 51.2683 134.41 50.755C135.064 50.2183 135.39 49.4717 135.39 48.515V42.985C135.39 42.0283 135.064 41.2933 134.41 40.78C133.78 40.2433 132.917 39.975 131.82 39.975C130.724 39.975 129.849 40.2317 129.195 40.745C128.565 41.2583 128.25 41.9933 128.25 42.95V48.55ZM175.452 56.915C175.498 57.0083 175.522 57.1133 175.522 57.23C175.522 57.44 175.44 57.6267 175.277 57.79C175.137 57.93 174.962 58 174.752 58H166.807C166.48 58 166.177 57.9183 165.897 57.755C165.64 57.5917 165.453 57.3817 165.337 57.125L162.257 50.195H159.317V57.055C159.317 57.3117 159.223 57.5333 159.037 57.72C158.85 57.9067 158.628 58 158.372 58H150.812C150.555 58 150.333 57.9067 150.147 57.72C149.96 57.5333 149.867 57.3117 149.867 57.055V34.445C149.867 34.1883 149.96 33.9667 150.147 33.78C150.333 33.5933 150.555 33.5 150.812 33.5H164.427C166.527 33.5 168.358 33.8383 169.922 34.515C171.508 35.1917 172.722 36.1717 173.562 37.455C174.402 38.7383 174.822 40.2433 174.822 41.97C174.822 45.1433 173.597 47.4417 171.147 48.865L175.452 56.915ZM163.692 43.72C164.205 43.72 164.602 43.5567 164.882 43.23C165.162 42.88 165.302 42.4483 165.302 41.935C165.302 41.4217 165.162 40.9783 164.882 40.605C164.625 40.2083 164.228 40.01 163.692 40.01H159.317V43.72H163.692Z" />
      </svg>
    </Flex>
  );
};

export default GoldenCondor;
