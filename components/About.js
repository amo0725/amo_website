import React from "react";

const About = () =>{
    return(
        <>
            <div className="max-w-4xl mx-auto h-36 bg-gray-100 dark:bg-gray-700">
                <h1 className="lg:text-8xl lg:text-left lg:py-24 py-28 text-center font-mono font-bold text-6xl text-gray-900 dark:text-white">About Me.</h1>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4">
                <div className="max-w-4xl mx-auto pt-20">
                    <p className="leading-9 lg:text-left text-center lg:text-2xl text-xl font-mono font-bold text-gray-900 dark:text-white">
                        I'm a Back-End Developer with a bachelor's degree in Computer Science & Information Engineering from <a href="https://www.tku.edu.tw/" className="rounded-md px-2 py-0.5 text-white bg-yellow-400 dark:bg-yellow-500">Tamkang University</a>.
                        Currently working at <a href="https://www.idct.com.tw/" className="rounded-md px-2 py-0.5 text-white bg-yellow-400 dark:bg-yellow-500">IDCtech</a> in Taiwan.
                    </p>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4">
                <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-3 max-w-4xl mx-auto gap-y-20 gap-x-20">
                    <div className="inline-flex flex-col">
                        <div>
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">Contact</h1>
                            <p className="text-base lg:text-lg text-gray-600 mt-4 dark:text-gray-300">
                                Mail : <a href="mailto:amo880725@gmail.com" className="underline">amo880725@gmail.com</a><br/>
                                Phone : <a href="tel:amo880725@gmail.com" className="underline">+886921220725</a>
                            </p>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">Job Opportunities</h1>
                            <p className="text-base lg:text-lg text-gray-600 mt-4 dark:text-gray-300">
                                I'm looking for a challenging backend developer position currently, where I can use my skills and knowledge for developing.<br/>
                                <a href="https://drive.google.com/file/d/1H9-Z5aM7xgDgc_Os-oGVD6OFS0CxeveW/view?usp=sharing/" className="underline font-bold">Click to check my CV !</a>
                            </p>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">Social Links</h1>
                            <div className="mt-4 ml-4">
                                <div className="flex flex-row justify-start items-center">
                                    <a href="https://www.facebook.com/amofeng88/" class="flex flex-row items-center space-x-4 group">
                                        <div class="my-5">→</div>
                                        <p class="text-base lg:text-lg text-gray-600 dark:text-gray-300 relative overflow-hidden">
                                            Facebook
                                        </p>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-start items-center">
                                    <a href="https://github.com/amo0725/" class="flex flex-row items-center space-x-4 group">
                                        <div class="my-5">→</div>
                                        <p class="text-base lg:text-lg text-gray-600 dark:text-gray-300 relative overflow-hidden">
                                            Github
                                        </p>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-start items-center">
                                    <a href="https://www.linkedin.com/in/amo-feng/" class="flex flex-row items-center space-x-4 group">
                                        <div class="my-5">→</div>
                                        <p class="text-base lg:text-lg text-gray-600 dark:text-gray-300 relative overflow-hidden">
                                            Linkedin
                                        </p>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-start items-center">
                                    <a href="https://www.instagram.com/amo_0725/" class="flex flex-row items-center space-x-4 group">
                                        <div class="my-5">→</div>
                                        <p class="text-base lg:text-lg text-gray-600 dark:text-gray-300 relative overflow-hidden">
                                            Instagram
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 lg:pt-2">
                        <p className="text-lg lg:text-xl text-gray-600 mb-4 dark:text-gray-300">
                            I've been developing full-stack application since I was 10 years old.
                            I didn't know what full-stack meant at that time because the term was not coined back then.
                            I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-600 mb-4 dark:text-gray-300">
                            I've been developing full-stack application since I was 10 years old.
                            I didn't know what full-stack meant at that time because the term was not coined back then.
                            I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-600 mb-4 dark:text-gray-300">
                            I've been developing full-stack application since I was 10 years old.
                            I didn't know what full-stack meant at that time because the term was not coined back then.
                            I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.
                        </p>
                        <h1 className="bg-yellow-400 dark:bg-yellow-500 lg:text-2xl text-xl rounded-md px-2 py-1 inline-block font-bold text-white">Tech Stack</h1>
                        <div className="flex flex-row flex-wrap mt-8">
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#6181B6" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#131313" d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"></path><path fill="#fff" d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#EE4323" d="M16.399 120.213c-2.156 0-2.783-1.255-2.783-3.136 0-.627.079-1.334.176-2.079.472-3.253 1.625-5.114 4.408-5.114 1.882 0 2.8.842 2.8 2.371V113h1.867c.021 0 .021-.686.021-.842 0-2.234-1.353-4.353-4.685-4.353-4.528 0-6.39 2.46-7.076 7.282a12.392 12.392 0 00-.157 1.896c0 2.842 1.118 5.427 5.116 5.427 3.038 0 4.842-1.481 5.9-3.304l-1.784-1.201c-1.156 1.823-2.411 2.308-3.803 2.308zm12.251-8.977c-3.627 0-5.194 1.861-5.723 5.565-.06.433-.099.883-.099 1.294 0 2.391 1.117 4.293 4.213 4.293 3.627 0 5.215-1.941 5.744-5.587.059-.47.098-.901.098-1.332.001-2.43-1.155-4.233-4.233-4.233zm1.509 5.566c-.392 2.686-1.234 3.509-2.823 3.509-1.273 0-1.9-.529-1.9-2.117 0-.392.04-.862.118-1.392.392-2.665 1.176-3.488 2.783-3.488 1.294 0 1.94.529 1.94 2.136 0 .392-.04.843-.118 1.352zM42 108l-.607 3.598c-.039.313-.019.209.099.503-.568-.431-1.588-.716-2.274-.716-3.254 0-5.076 1.473-5.664 5.589-.078.49-.098.903-.098 1.314 0 3 1.764 4.118 4.135 4.118 1.001 0 1.98.021 2.744-.625L40.53 123h1.882l2.195-15H42zm-1.862 11.742a4.496 4.496 0 01-2.272.647c-1.431 0-1.823-.745-1.823-1.94 0-.451.059-.979.138-1.549.45-3.116 1.45-3.666 2.744-3.666.842 0 1.488.138 2.097.472l-.884 6.036zm10.193-8.506c-3.588 0-5.272 1.704-5.841 5.565-.06.471-.099.922-.099 1.353 0 2.646 1.353 4.234 4.331 4.234 2.313 0 4.039-.961 4.96-2.725l-1.98-.804c-.568.862-1.332 1.45-2.685 1.45-1.45 0-2.038-.39-2.038-1.684 0-.255.02-.626.059-.626h7.075c.099-1 .215-1.707.215-2.293 0-1.959-.744-4.47-3.997-4.47zM51.683 116h-4.312c.432-1 1.156-2.548 2.646-2.548 1.156 0 1.725.676 1.725 1.832-.001.196-.019.716-.059.716zm10.188-5l.235-2h-5.528l-.234 2h1.45l-1.567 10h-1.452l-.234 2h5.527l.236-2h-1.451l1.567-10zm11.232 3l.706-2h-1.901l-1.371.283c-.765-.489-1.804-.856-2.783-.856-2.804 0-5.194 1.354-5.194 4.432 0 .863.313 1.56.685 2.031-.587.313-1.097.837-1.097 1.544 0 .313.117.634.353.927-1.177.707-1.9 1.878-1.9 3.249 0 2.647 2.763 3.212 4.88 3.212 2.665 0 5.841-.609 5.841-4 0-1.156-.725-2.059-2.822-2.451l-3.783-.707c-.431-.079-.529-.216-.529-.412 0-.294.178-.45.471-.45l.255.039c.51.117 1.098.177 1.705.177 2.725 0 5.155-1.177 5.155-4.234 0-.432-.078-.724-.274-1.195.333.157.765.412.94.412h.663zm-5.389 8.113c.744.138.998.412.998.902 0 1.588-1.705 1.784-2.939 1.784-1.882 0-2.587-.45-2.587-1.451 0-.882.254-1.293.843-1.921l3.685.686zm-.805-5.134c-1.137 0-1.764-.411-1.764-1.392 0-1.45.843-2.293 2.313-2.293 1.176 0 1.745.49 1.745 1.449 0 1.451-.824 2.236-2.294 2.236zm13.157-5.743c-1.098 0-2.077.539-3.293 1.498l-.176-.734H74.44l-1.509 11h2.607l1.137-8.342c.765-.47 1.705-1.153 2.509-1.153.979 0 1.333.473 1.333 1.374 0 .216-.021.855-.06 1.09L79.498 123h2.607l.959-7.088c.04-.332.079-.878.079-1.191.001-1.864-.882-3.485-3.077-3.485zm8.029 9.008l.02-.269L89.251 112h-4.332l-.273 2h1.9c-.157 0-.255.175-.274.333l-.784 5.311a9.195 9.195 0 00-.058 1.002c0 1.372.744 2.354 2.272 2.354h1.333l.294-2h-.842c-.295 0-.392-.521-.392-.756zM89.78 108h-2.548c-.157 0-.157-.577-.176-.381l-.354 2.818c-.02.177-.02.563.137.563h2.549c.157 0 .157-.685.176-.863l.354-2.175c.02-.196.02.038-.138.038zm5.316 12.311c-.646 0-.96-.275-.96-.862l.02-.04.823-5.409h2.979l.901-2h-3.606l.607-4.401-2.743.877-.491 3.524h-1.587l-.274 2h1.842c-.176 1-.353.351-.372.548l-.706 4.743c-.039.216-.039.373-.039.568 0 1.862 1.372 2.559 3.02 2.559 1.528 0 2.763-.446 3.724-1.251l-1.216-1.496c-.609.372-1.02.64-1.922.64zm9.565-9.075c-3.587 0-5.272 1.704-5.841 5.565-.059.471-.098.922-.098 1.353 0 2.646 1.352 4.234 4.331 4.234 2.313 0 4.039-.961 4.959-2.725l-1.979-.804c-.568.862-1.333 1.45-2.686 1.45-1.449 0-2.038-.39-2.038-1.684 0-.255.021-.626.06-.626h7.075c.098-1 .216-1.707.216-2.293 0-1.959-.745-4.47-3.999-4.47zm1.353 4.764h-4.312c.431-1 1.155-2.548 2.646-2.548 1.156 0 1.725.676 1.725 1.832-.001.196-.02.716-.059.716zm9.859-4.764c-.941 0-1.823.539-2.705 1.38l-.157-.616h-2.155l-1.51 11h2.627l1.156-8.518c.686-.411 1.47-.762 2.215-.762.471 0 .921-.075 1.352-.016l.335-2.273c-.394-.078-.786-.195-1.158-.195zM49.31 100.121c-5.933-2.564-11.485-9.082-11.498-15.751-.016-7.271 4.592-13.444 10.323-17.501-.689 2.603-1.065 4.984.642 7.312a6.913 6.913 0 006.99 2.646c6.132-1.342 6.413-8.083 2.778-12.01-3.594-3.889-7.071-8.282-5.703-13.922.685-2.827 2.421-5.475 4.62-7.368-1.69 4.442 3.113 8.823 6.278 11.005 5.49 3.786 11.513 6.647 16.561 11.085 5.31 4.664 9.231 10.971 8.439 18.285-.858 7.928-7.158 13.442-14.224 16.226 14.932-3.296 30.361-14.885 30.677-31.446.262-13.624-9.084-24.109-20.662-30.112l-.605-.33c.318.771.422 1.427.41 2.014a7.02 7.02 0 00.194-1.337 6.516 6.516 0 01-.212 1.616l.018-.279a6.788 6.788 0 01-.857 2.043l.17-.183c-2.31 3.831-8.563 4.663-11.652.696-4.966-6.381.104-13.261.813-20.018.888-8.469-4.423-16.69-11.008-21.61 3.627 5.867-1.151 13.629-4.974 17.968-3.707 4.207-8.215 7.719-12.307 11.541-4.396 4.105-8.622 8.429-12.235 13.247-7.226 9.643-11.65 21.771-8.399 33.802 3.249 12.022 13.663 19.675 25.423 22.381z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#00618A" d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z"></path><path fill="#E48E00" d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z"></path><path fill="#00618A" d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#31251C" d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zm13.332-9.04c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997V56.785c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929H92.563v-.001zm33.857-1.93c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011V55.7c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"></path><path fill="#F34F29" d="M52.7 61.7L29.951 38.952a3.355 3.355 0 00-4.744 0l-4.724 4.724 5.991 5.992a3.983 3.983 0 014.1.956 3.988 3.988 0 01.947 4.125l5.775 5.775a3.988 3.988 0 014.125 6.593 3.992 3.992 0 01-6.516-4.342l-5.386-5.386-.001 14.174a3.992 3.992 0 011.056 6.401 3.993 3.993 0 11-4.339-6.518V57.141a3.99 3.99 0 01-2.167-5.236l-5.906-5.908L2.563 61.595a3.356 3.356 0 000 4.747L25.312 89.09a3.357 3.357 0 004.746 0L52.7 66.446a3.355 3.355 0 000-4.746z"></path><path fill="none" d="M1.58 37.928h124.84v52.143H1.58z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"></path>
                            </svg>
                            <svg className="h-20 w-20 mx-4 my-4" viewBox="0 0 128 128">
                                <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;