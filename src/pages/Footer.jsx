import X from "../assets/Images/x.jpg";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content flex flex-col md:flex-row md:justify-between items-center p-4">
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>© {new Date().getFullYear()} Pradum Prajapati - All right reserved</p>
      </aside>
      <nav className="grid grid-flow-col gap-4 justify-center md:place-self-center md:justify-self-end">
        <a href="https://x.com/pradump2003" target="_blank" rel="noreferrer">
          <img src={X} alt="X" className="h-[24px] w-[24px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/pradum-prajapati-73564b217"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.481c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.481h-3v-5.604c0-1.337-.027-3.064-1.866-3.064-1.869 0-2.155 1.459-2.155 2.967v5.701h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.556 2.837-1.556 3.033 0 3.592 1.996 3.592 4.591v5.598z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/its_pradum_prajapati"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.75 2h8.5c3.042 0 4.75 1.708 4.75 4.75v8.5c0 3.042-1.708 4.75-4.75 4.75h-8.5c-3.042 0-4.75-1.708-4.75-4.75v-8.5c0-3.042 1.708-4.75 4.75-4.75zm0-2c-4.145 0-6.75 2.605-6.75 6.75v8.5c0 4.145 2.605 6.75 6.75 6.75h8.5c4.145 0 6.75-2.605 6.75-6.75v-8.5c0-4.145-2.605-6.75-6.75-6.75h-8.5zm4.25 7c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm5.5-10c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/pradum.prajapati.9421"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
}
