export default function ContactForm() {
  return (
    <form className="form">
      <div className="grid grid-2">
        <div className="field">
          <label htmlFor="name">Nom complet</label>
          <input id="name" name="name" type="text" placeholder="Votre nom" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="vous@email.com" />
        </div>
      </div>
      <div className="grid grid-2">
        <div className="field">
          <label htmlFor="phone">Telephone</label>
          <input id="phone" name="phone" type="tel" placeholder="+212 ..." />
        </div>
        <div className="field">
          <label htmlFor="subject">Sujet</label>
          <select id="subject" name="subject" defaultValue="">
            <option value="" disabled>
              Choisir un sujet
            </option>
            <option>Formation</option>
            <option>TP CIP</option>
            <option>Preinscription</option>
            <option>Devis</option>
            <option>Autre demande</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Expliquez votre besoin" />
      </div>
      <button className="button" type="submit">
        Envoyer
      </button>
    </form>
  );
}
