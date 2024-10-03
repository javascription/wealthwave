import React from "react";

const About1 = () => {
  return (
    <>
      <section className="overflow-x-hidden pt-20 lg:pt-[120px] bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px] text-secondary">
                 About Us
                </h2>
                <p className="mb-5 text-base text-text p">
                At WealthWave, we believe that financial inclusion is the key to unlocking economic potential for individuals and communities alike. Our mission is to provide accessible, innovative, and secure financial solutions to underserved populations. With our user-friendly platform, interactive financial education, and guided investment portfolio creation driven by our proprietary financial model WeathWave,  we are breaking down the barriers that prevent millions from achieving financial independence.
                </p>
                <p className="mb-5 text-base text-text p">
                By leveraging cutting-edge technology like blockchain and fostering local partnerships, we empower individuals to save, invest, and grow their wealth in a transparent, secure, and sustainable way. Join us as we reshape the future of investments and create opportunities for everyone, everywhere. WealthWave is more than a platform—it’s a movement toward financial empowerment for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pt-40 lg:pt-[60px] bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px] text-secondary">
                 Why Choose Us?
                </h2>
                <p className="mb-5 text-base text-text p">
                WealthWave breaks down the barriers to financial investments, offering accessible financial services with no hidden fees. Our platform is designed to uplift underserved individuals and small businesses, providing the tools they need to achieve financial independence and sustainable growth by investing even as small as Rs 10 in different financial instruments such as Government Bonds, Sovereign Gold Bonds, Infrastructure Bonds, and Mutual Funds.
                </p>
                <p className="mb-8 text-base text-text p">
                With a focus on investments in several financial instruments backed by blockchain-powered security, WealthWave offers cutting-edge financial solutions. We combine transparent investments, interactive education, and local partnerships with other financial institutions to empower users, fostering long-term economic stability and prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default About1;
