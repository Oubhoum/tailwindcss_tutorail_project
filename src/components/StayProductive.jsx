// #67dbda

const StayProductive = () => {
    return (
        <section className="pb-[150px]">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px]  place-items-center">
                <div>
                    <img
                        src="./src/assets/images/illustration-stay-productive.png" alt="stay-productive-img"
                    />
                </div>
                <div className="text-white">
                    <h3 className="font-medium text-[35px] leading-[50px]">
                        Stay productive,
                        <br />
                        wherever you are
                    </h3>
                    <div
                        className="my-[15px] font-normal text-sm tracking-[0.8px]"
                    >
                        <p className="mb-[15px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, modi ad error quos placeat ratione nisi beatae eaque eos adipisci? A eligendi inventore ipsum accusantium voluptate praesentium hic quae consequuntur.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod consequatur quidem quasi ullam, officia, ipsam libero distinctio quibusdam accusantium, reiciendis perferendis dicta vel facere ab? Consectetur ab quo vitae illo.
                        </p>
                    </div>
                    <a
                        href="/"
                        className="text-[#67dbda] hover:text-[#42b0d1] border-b-2 border-[#42b0d1] border-solid pb-[5px] transition-colors duration-200 flex items-center gap-[15px] w-fit"
                    >
                        See how Fylo worsk
                        <img
                            src="./src/assets/images/icon-arrow.svg"
                            alt="icon-arrow"
                            className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default StayProductive