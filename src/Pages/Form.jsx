import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Modal } from "npm-modal-react";
import { ErrorMessage } from "@hookform/error-message";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form(props) {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const [isOpenModal, setIsOpenModal] = useState(false);

  function onSubmit(employee) {
    props.setEmployees((previousValues) => [...previousValues, employee]);
    toggleModal();
    reset();
  }

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <div className="title">
        <h1 className="logo">HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">Voir l'employée actuel</Link>
        <h2>Créer Un Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="first-name">Prenom</label>
          <input
            type="text" id="firstname"
            {...register("firstname", { required: "Ceci est Requis." })}
          />
          <ErrorMessage errors={errors} name="firstname" as="p" />

          <label htmlFor="last-name">Nom</label>
          <input
            type="text" id="lastname"
            {...register("lastname", { required: "Ceci est Requis." })}
          />
          <ErrorMessage errors={errors} name="lastname" as="p" />

          <label htmlFor="date-of-birth">Date de naissance</label>
          <Controller
            control={control}
            rules={{ required: "Ceci est Requis" }}
            name="dateOfBirth"
            render={({ field }) => (
              <ReactDatePicker
                placeholderText="Selectionner une Date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="selectionner"
                todayButton="Aujourd'hui"
              />
            )}
          />
          <ErrorMessage errors={errors} name="dateOfBirth" as="p" />

          <label htmlFor="start-date">Date de Début</label>
          <Controller
            control={control}
            rules={{ required: "Ceci est Requis" }}
            name="startDate"
            render={({ field }) => (
              <ReactDatePicker
                placeholderText="Selectinner une Date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="selectionner"
                todayButton="Aujourd'hui"
              />
            )}
          />
          <ErrorMessage errors={errors} name="startDate" as="p" />

          <fieldset className="address">
            <legend>Adresse</legend>

            <label htmlFor="street">Rue</label>
            <input
              type="text" id="street"
              {...register("street", { required: "Ceci est Requis." })}
            />
            <ErrorMessage errors={errors} name="street" as="p" />

            <label htmlFor="city">Ville</label>
            <input
              type="text" id="ville"
              {...register("city", { required: "Ceci est Requis." })}
            />
            <ErrorMessage errors={errors} name="city" as="p" />

            <label htmlFor="state">State</label>
            <select {...register("state", { required: "Ceci est Requis." })}>
              {states.map((elt, idx) => (
                <option key={idx} value={elt.abbreviation}>
                  {elt.name}
                </option>
              ))}
            </select>
            <ErrorMessage errors={errors} name="state" as="p" />

            <label htmlFor="zip-code">code postal</label>
            <input
              type="number" id="code postal"
              {...register("zipCode", { required: "Ceci est Requis." })}
            />
            <ErrorMessage errors={errors} name="zipCode" as="p" />
          </fieldset>

          <label htmlFor="department">Departement</label>
          <select
            {...register("department", { required: "Ceci est requis." })}
          >
            <option value="">--Veuillez choisir une option--</option>
            <option>Ventes</option>
            <option>Marketing</option>
            <option>Ingénierie</option>
            <option>Ressources Humaines</option>
            <option>Juridique</option>
          </select>
          <ErrorMessage errors={errors} name="department" as="p" />

          <button type="submit">Sauvegarder</button>
        </form>
      </div>
      <Modal isOpen={isOpenModal} backdrop crossClose onClose={toggleModal}>
        <p>Employee Créer!</p>
      </Modal>
    </>
  );
}

export default Form

const states = [
  {
    name: "--Veuillez choisir une option--",
    abbreviation: "",
  },
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];
