import React from "react";

interface HeaderProps {
  toggleDarkmode: boolean;
  onToggleDarkmode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkmode, onToggleDarkmode }) => {
  return (
    <header>
      <div className="flex justify-between sticky top-0 py-8">
        <div className="border border-[#d7aa26db] cursor-pointer rounded-md py-1 px-4 text-base transition-all dark:text-white hover:bg-[#d7aa26db] hover:text-white md:text-2xl">
          <a
            href="https://docs.google.com/document/d/14gjAgDVSeR22KI0DTudmaUcnc4vICL6SpA5jWjPbNjg/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
        </div>
        <div>
          {toggleDarkmode ? (
            <div
              className="dark:text-white text-dark cursor-pointer text-[1.5em]"
              onClick={onToggleDarkmode} // Toggle handler
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 352 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
              </svg>
            </div>
          ) : (
            <div
              className="dark:text-white text-dark text-[1.5em] cursor-pointer"
              onClick={onToggleDarkmode} // Toggle handler
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;