import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosInstance from '../../services/AxiosInstance';
import './faq.css';
import rightArrow from '../../images/plus.png';
import downArrow from '../../images/minus.png';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
const Faqs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      var data = await axiosInstance.get('/faqs/');
      data = data.data;
      // setCurrEvent(data[0]);
      setData(data);
      // console.log(data);
      // setLoading(false);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // const [data, setData] = useState(question);
  const [accordian, setAccordian] = useState(-1);
  function toogleAccordian(index) {
    if (index === accordian) {
      setAccordian(-1);
      return;
    }
    setAccordian(index);
  }
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <div className="container">
        <div>
          <span className="accordian__title">FAQs</span>
        </div>
        <div className="most_outerCon">
          <div className="outerContainer">
            <div className="accordian__faq">
              {data.map((item, index) => (
                <div className="faqs__quesans" key={index} onClick={() => toogleAccordian(index)}>
                  <div className="question">
                    <div>
                      {accordian === index ? (
                        <>
                          <img src={downArrow}></img>
                        </>
                      ) : (
                        <img src={rightArrow}></img>
                      )}
                    </div>
                    <div className="accordian__faq-heading">
                      <h3 className={accordian === index ? 'active' : ''}>{item.question}</h3>
                    </div>
                  </div>

                  <div className="answer">
                    <p className={accordian === index ? 'active' : 'inactive'}>{item.answer}</p>
                  </div>
                  <div className="divider"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
