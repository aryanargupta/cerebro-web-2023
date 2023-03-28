import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosInstance from '../../services/AxiosInstance';
import './faq.css';
import rightArrow from '../../images/plus.png';
import downArrow from '../../images/minus.png';

const Faqs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      var data = await axiosInstance.get('/faqs/');
      data = data.data;
      // setCurrEvent(data[0]);
      setData(data);
      // console.log(data);
      // setLoading(false);
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
                <div key={index} onClick={() => toogleAccordian(index)}>
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
