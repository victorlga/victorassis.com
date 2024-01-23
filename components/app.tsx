import Link from "next/link"

export function App() {
  return (
    <div key="1" className="dark flex flex-col min-h-screen bg-gray-900">
      <main className="flex-1 py-10 px-4 bg-gray-800 bg-opacity-50">
        <section className="container mx-auto space-y-6 text-center" id="about">
          <div className="mx-auto max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-100">Victor Assis</h1>
            <p className="text-gray-400 mt-4">
              I am a computational biology researcher and computer engineering undergraduate student at Insper -
              Instituto de Ensino e Pesquisa (Brazil). My work focuses on developing computational models to understand
              biological systems and tools to help researchers in their own work.
            </p>
            <p className="text-gray-400 mt-4">
              My research interests include single-cell omics, machine learning, and drug discovery. I am currently a
              research intern at University of Cincinnati College of Medicine's THINK Lab, where I am working under
              the supervision of Lucas Bulgarelli and Rodrigo Deliberato, PhD.
            </p>
            <p className="text-gray-400 mt-4">
              On a past live, I worked as a Product Analyst at a BNPL colombian startup called Addi, backed
              by Andreessen Horowitz. I also owned a software company called Cowala, where me and some college friends
              selled software development services.
            </p>
            {/* <p className="text-gray-400 mt-4">
              I recently got selected to participate in the 2024 Summer Research Program at the University of Illinois
              at Urbana-Champaign, where I will be working on (To be defined).
            </p> */}
            <p className="text-gray-400 mt-4">
              If you are interested in my work or just want to chat, please feel free to contact me at hey@victorassis.com
              or by clicking the mail icon below.
            </p>
            <img
              alt="Victor Assis"
              className="mt-8 mx-auto w-48 h-48 object-cover rounded-full border-4 border-gray-700"
              height="200"
              src="/profilePicture.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="flex justify-center space-x-4 mt-8">
              <Link className="text-gray-400 hover:text-gray-300" href="https://world.hey.com/victor.assis/">
                <HeyIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="https://github.com/victorlga">
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="https://www.linkedin.com/in/victorlga/">
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="mailto:victor.assis@hey.com">
                <MailIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 bg-gray-800 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-gray-400">© 2024 Victor Assis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function HeyIcon(props) {
  return (
    <svg fill="#CCCCCC" width="30" height="30" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M19.57 6.698a5.724 5.724 0 0 0-2.644 1.572c-.84-2.952-2.65-7.42-4.415-8.15a1.283 1.283 0 0 0-1.181.05c-1.104.643-1.823 2.709-1.194 6.624C7.71 2.353 6.863 2.36 6.472 2.353a.956.956 0 0 0-.873.597c-.263.584-.79 2.406.494 6.327C4.547 7.16 4.072 6.89 3.526 6.917a.969.969 0 0 0-.821.557c-.463.873-.41 3.068 1.027 6.34a2.946 2.946 0 0 0-1.773-.73 1.06 1.06 0 0 0-.853.544c-.584 1.073.642 4.083 2.157 6.124C4.49 21.427 6.947 24 10.515 24a8.047 8.047 0 0 0 1.489-.141.654.654 0 0 0-.25-1.284c-2.965.578-5.2-1.052-6.553-2.515-2.021-2.19-2.908-4.82-2.959-5.622.424.173 1.644.892 4.018 3.934a.65.65 0 0 0 1.059-.757c-3.337-5.066-3.664-8.132-3.555-9.166.982 1 3.433 4.671 5.28 7.445a.642.642 0 0 0 .88.199.642.642 0 0 0 .238-.873C6.312 8.16 6.446 4.952 6.67 3.874c.577.584 2.11 2.618 5.34 9.626a.642.642 0 0 0 .84.327.642.642 0 0 0 .366-.827c-3.132-8.504-1.772-11.385-1.252-11.712.674 0 2.567 3.247 3.748 7.502.07.263.141.52.205.77a4.094 4.094 0 0 0-.385.924c-.64 2.355-1.283 7.7-.045 9.17a1.194 1.194 0 0 0 1.04.444 1.688 1.688 0 0 0 1.232-.757c1.15-1.675.475-5.879-.443-9.557a4.832 4.832 0 0 1 2.567-1.84 1.283 1.283 0 0 1 1.284.307c.526.59 1.445 2.798-1.34 10.583a.654.654 0 0 0 1.231.436c2.22-6.206 2.568-10.204 1.084-11.886A2.528 2.528 0 0 0 19.57 6.7zm-2.888 11.918a.41.41 0 0 1-.218.186c-.48-.571-.48-3.953.045-6.727.995 4.795.417 6.2.173 6.54z"/></svg>
  )
}


function GithubIcon(props) {
  return (
    <svg fill="#CCCCCC" width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>github</title>
    <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path>
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg fill="#CCCCCC" width="30" height="30" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z"/></svg>
  )
}


function MailIcon(props) {
  return (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="#CCCCCC" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
