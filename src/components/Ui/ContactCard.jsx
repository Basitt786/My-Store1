
const ContactCard = ({curentele, index}) => {
    const {name, username, email, address, phone, website} = curentele;

    return(
        <li className="container">
             <img
              src={`https://i.pravatar.cc/150?img=${index + 1}`}
              alt={name}
              className="avatar"
            />
            <h2 className="main">{name}</h2>
            <p className="mails">Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p className="lastweek">
              Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </p>
          </li>
    )
}

export default ContactCard;