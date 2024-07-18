import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      const filterList = contactList.filter((item) =>
        item.name.includes(keyword)
      );
      setFilteredList(filterList);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, keyword]);

  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        num : {filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
