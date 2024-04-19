import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <section className="FAQs section" id="FAQS">
            <div className="title-align">
                <h3 className="section_title">Frequently asked questions</h3>
            </div>
            <div className="ExpandableCard">
                <div className="accordion">
                    {data.map((item, i) => (
                        <div className="item" key={i}>
                            <div className="title" onClick={() => toggle(i)}>
                                <h4>{item.question}</h4>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const data = [
    {
        question:
            'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
        answer:
            'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
        question:
            'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
        answer:
            'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
        answer:
            'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
];

export default FAQs;
