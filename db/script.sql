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

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';

CREATE TYPE public.vehicle_type_enum AS ENUM (
    'car',
    'truck',
    'bike',
    'utility'
);

ALTER TYPE public.vehicle_type_enum OWNER TO postgres;

CREATE TYPE public.vehicle_vehicle_state_enum AS ENUM (
    'A',
    'B',
    'C',
    'D'
);

ALTER TYPE public.vehicle_vehicle_state_enum OWNER TO postgres;

CREATE TYPE public.vehicule_etat_enum AS ENUM (
    'A',
    'B',
    'C',
    'D'
);

ALTER TYPE public.vehicule_etat_enum OWNER TO postgres;

CREATE TYPE public.vehicule_type_enum AS ENUM (
    'voiture',
    'camion',
    'moto',
    'utilitaire'
);

ALTER TYPE public.vehicule_type_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

CREATE TABLE public.customer (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL,
    birthdate timestamp without time zone NOT NULL,
    mail character varying NOT NULL,
    phone character varying NOT NULL
);

ALTER TABLE public.customer OWNER TO postgres;

CREATE TABLE public.renting (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    pricing integer NOT NULL,
    "customerId" uuid,
    "vehicleId" uuid
);

ALTER TABLE public.renting OWNER TO postgres;

CREATE TABLE public.vehicle (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    type public.vehicle_type_enum NOT NULL,
    brand character varying NOT NULL,
    model character varying NOT NULL,
    registration_number character varying NOT NULL,
    vehicle_state public.vehicle_vehicle_state_enum NOT NULL,
    renting_price integer NOT NULL
);

ALTER TABLE public.vehicle OWNER TO postgres;

INSERT INTO public.customer (id, firstname, lastname, birthdate, mail, phone) VALUES ('59262413-352b-4b2f-8bd4-70231876db85', 'Roland', 'Leteneur', '1994-03-15 00:00:00', 'roland@mail.com', '0601010101');
INSERT INTO public.customer (id, firstname, lastname, birthdate, mail, phone) VALUES ('260d7cca-3416-43a0-b6ef-688f7492fd43', 'Marboulin', 'Du Tchad', '1990-06-28 00:00:00', 'marboubou@mail.com', '0601010101');
INSERT INTO public.customer (id, firstname, lastname, birthdate, mail, phone) VALUES ('3340cb8b-6316-4a99-9c1f-5b7284cbbc4e', 'Maureen', 'Vinchent', '1986-07-13 00:00:00', 'vinchent@mail.com', '0601010101');
INSERT INTO public.customer (id, firstname, lastname, birthdate, mail, phone) VALUES ('75fcc82b-66ce-4a91-b725-f3e516a6bcdf', 'Vincent', 'Leroy', '1996-12-02 00:00:00', 'leroy@mail.com', '0601010101');

INSERT INTO public.renting (id, start_date, end_date, pricing, "customerId", "vehicleId") VALUES ('845af619-7bdc-44fa-837d-b4abd3047def', '2022-11-02 00:00:00', '2022-11-10 00:00:00', 2152, '59262413-352b-4b2f-8bd4-70231876db85', 'c71bba38-9936-4535-b839-272995a352cd');
INSERT INTO public.renting (id, start_date, end_date, pricing, "customerId", "vehicleId") VALUES ('1339bb02-033e-427b-b1f2-9a1aef94ea23', '2022-10-08 00:00:00', '2022-10-28 00:00:00', 11200, '260d7cca-3416-43a0-b6ef-688f7492fd43', '3b10d9fb-c119-479d-b3a2-d3afdfb316f1');
INSERT INTO public.renting (id, start_date, end_date, pricing, "customerId", "vehicleId") VALUES ('623da613-2148-4124-ac9b-fbc936bf7371', '1999-03-15 00:00:00', '1999-03-18 00:00:00', 807, '3340cb8b-6316-4a99-9c1f-5b7284cbbc4e', 'c71bba38-9936-4535-b839-272995a352cd');

INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, renting_price) VALUES ('c71bba38-9936-4535-b839-272995a352cd', 'car', 'BWM', 'X5', 'AA-000-AA', 'A', 269);
INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, renting_price) VALUES ('f7958963-a284-48f1-92e6-196940568c44', 'car', 'BWM', 'Série 4 Cabriolet', 'AA-000-AB', 'A', 179);
INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, renting_price) VALUES ('f6c03be3-0918-48d5-983c-251faed1a0dd', 'car', 'Renault', 'Clio Estate', 'AA-000-AD', 'B', 186);
INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, renting_price) VALUES ('e499126a-7097-488d-a177-52ae2ac20d53', 'car', 'Renault', 'Twingo', 'AA-000-AC', 'C', 150);
INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, renting_price) VALUES ('f7df9a1e-ad56-405f-9721-d9db88518c4d', 'utility', 'Renault', 'Marster 15-17M3', 'AA-000-AE', 'C', 198);
INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, renting_price) VALUES ('3b10d9fb-c119-479d-b3a2-d3afdfb316f1', 'truck', 'Scania', 'Série P', 'AA-000-AF', 'A', 560);
INSERT INTO public.vehicle (id, type, brand, model, registration_number, vehicle_state, renting_price) VALUES ('2c72f9c1-c47f-4a1a-ab74-c7d6092dd22d', 'bike', 'Yamaha', 'XSR700', 'AA-000-AG', 'A', 99);

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY (id);

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY (id);

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT "PK_e4ecbab21c3d0a81a684409e0d5" PRIMARY KEY (id);

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT "FK_04f0df8a342e52559de780e93ff" FOREIGN KEY ("vehicleId") REFERENCES public.vehicle(id);

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT "FK_1d8d0f1c892d74d7e7fb32b3e00" FOREIGN KEY ("customerId") REFERENCES public.customer(id);

