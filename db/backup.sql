--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-09-29 11:09:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- DROP DATABASE localib;
--
-- TOC entry 3352 (class 1262 OID 16422)
-- Name: localib; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE localib; 


ALTER DATABASE localib OWNER TO postgres;

\connect localib

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16423)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3353 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- TOC entry 841 (class 1247 OID 16849)
-- Name: vehicle_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.vehicle_type_enum AS ENUM (
    'car',
    'truck',
    'bike',
    'utility'
);


ALTER TYPE public.vehicle_type_enum OWNER TO postgres;

--
-- TOC entry 844 (class 1247 OID 16858)
-- Name: vehicle_vehicle_state_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.vehicle_vehicle_state_enum AS ENUM (
    'A',
    'B',
    'C',
    'D'
);


ALTER TYPE public.vehicle_vehicle_state_enum OWNER TO postgres;

--
-- TOC entry 838 (class 1247 OID 16518)
-- Name: vehicule_etat_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.vehicule_etat_enum AS ENUM (
    'A',
    'B',
    'C',
    'D'
);


ALTER TYPE public.vehicule_etat_enum OWNER TO postgres;

--
-- TOC entry 835 (class 1247 OID 16508)
-- Name: vehicule_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.vehicule_type_enum AS ENUM (
    'voiture',
    'camion',
    'moto',
    'utilitaire'
);


ALTER TYPE public.vehicule_type_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 16924)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL,
    birthdate timestamp without time zone NOT NULL,
    mail character varying NOT NULL,
    phone character varying NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16937)
-- Name: renting; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.renting (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    pricing integer NOT NULL,
    "customerId" uuid,
    "vehicleId" uuid
);


ALTER TABLE public.renting OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16906)
-- Name: vehicle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehicle (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    type public.vehicle_type_enum NOT NULL,
    brand character varying NOT NULL,
    model character varying NOT NULL,
    registration_number character varying NOT NULL,
    vehicle_state public.vehicle_vehicle_state_enum NOT NULL,
    disponibility boolean NOT NULL
);


ALTER TABLE public.vehicle OWNER TO postgres;

--
-- TOC entry 3345 (class 0 OID 16924)
-- Dependencies: 211
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.customer (id, firstname, lastname, birthdate, mail, phone) VALUES ('12b1f7df-109d-4c54-ab3d-09eae299d87c', 'Test', 'Test', '1994-03-15 00:00:00', 'test@mail.com', '0601010101');
INSERT INTO public.customer (id, firstname, lastname, birthdate, mail, phone) VALUES ('42034d2e-9991-4c8e-9d61-e1a6f9efd87b', 'Test', 'Test', '1994-03-15 00:00:00', 'test@mail.com', '0601010101');


--
-- TOC entry 3346 (class 0 OID 16937)
-- Dependencies: 212
-- Data for Name: renting; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.renting (id, start_date, end_date, pricing, "customerId", "vehicleId") VALUES ('6cb13dfc-e1d0-4919-a048-7ab0e8f067df', '2022-09-28 00:00:00', '2022-09-29 00:00:00', 2000, '12b1f7df-109d-4c54-ab3d-09eae299d87c', '11dfce95-3676-4705-ab34-662df5aa3642');


--
-- TOC entry 3344 (class 0 OID 16906)
-- Dependencies: 210
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, disponibility) VALUES ('cc6d6c58-9aee-473b-a79f-3b0275ca79a6', 'car', 'zdaz', 'azeaze', 'TY-966-ER', 'B', true);
INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, disponibility) VALUES ('11dfce95-3676-4705-ab34-662df5aa3642', 'car', 'BWM', 'M3', 'AA-000-AU', 'B', false);


--
-- TOC entry 3198 (class 2606 OID 16913)
-- Name: vehicle PK_187fa17ba39d367e5604b3d1ec9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY (id);


--
-- TOC entry 3200 (class 2606 OID 16931)
-- Name: customer PK_a7a13f4cacb744524e44dfdad32; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY (id);


--
-- TOC entry 3202 (class 2606 OID 16942)
-- Name: renting PK_e4ecbab21c3d0a81a684409e0d5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT "PK_e4ecbab21c3d0a81a684409e0d5" PRIMARY KEY (id);


--
-- TOC entry 3204 (class 2606 OID 16948)
-- Name: renting FK_04f0df8a342e52559de780e93ff; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT "FK_04f0df8a342e52559de780e93ff" FOREIGN KEY ("vehicleId") REFERENCES public.vehicle(id);


--
-- TOC entry 3203 (class 2606 OID 16943)
-- Name: renting FK_1d8d0f1c892d74d7e7fb32b3e00; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT "FK_1d8d0f1c892d74d7e7fb32b3e00" FOREIGN KEY ("customerId") REFERENCES public.customer(id);


-- Completed on 2022-09-29 11:09:57

--
-- PostgreSQL database dump complete
--

