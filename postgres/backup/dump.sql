--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

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
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, open_id, acc_type, name, password, email, role, created_at, verify, photo, applications, sketches) FROM stdin;
695628b3-43ce-47c7-80b2-f2714e06d8fd	\N	1	lolka	Y7z1LZYrKt4Fop36kkG+h5ghA03vMtbFqjEz+TsDGb4=	bringmetheaugust@gmail.com	1	1610915534229	f	\N	{}	{}
\.


--
-- Data for Name: applications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.applications (id, author, title, descr, images, created_at) FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

