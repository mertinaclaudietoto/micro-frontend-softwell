

import { useEffect, useCallback } from "react";

import { deletev, getData } from "../../function/Axios";

import { CardAddTraining, Sidebar, CardWish, CardWishDetail } from "../../components";

import { url, textbackground } from "../../data/data";

import { useState } from "react";

import { formatDate } from "../../function/utils";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



export default function Wish1() {

    const acces = sessionStorage.getItem("access");

    const accesObj = JSON.parse(acces);

    const [data, setData] = useState([]);

    const [dataGroup, setDataGroup] = useState([]);

    const [close, setClose] = useState(false);

    const [closeAddTraining, setCloseAddTraining] = useState(false);

    const [detailWish, setDetailWish] = useState(null);

    const [seeTrainingListe, setSeeTrainingListe] = useState(false);

    const nbrSize = 10;

    const [nbrligne, setNbrLigne] = useState(0);

    const [numpage, setNumpage] = useState(1);



    const pagination = (value) => {

        setNumpage(

            value < 1

                ? 1

                : value > Math.ceil(nbrligne / nbrSize)

                ? Math.ceil(nbrligne / nbrSize)

                : value

        );

    };



    const loadData = useCallback(async () => {

        const response = await getData(

            url + `v_wish/pagination?pageNumber=${numpage}&pageSize=${nbrSize}`

        );

        setData(response.data);

    }, [numpage, closeAddTraining, close]);



    const getNbrLigne = async () => {

        const response = await getData(url + "v_wish/count");

        if (response.data != null) setNbrLigne(response.data);

    };



    const getGroupBy = async () => {

        const response = await getData(

            url + `v_wish/pagination-groupbytheme?pageNumber=${numpage}&pageSize=${nbrSize}`

        );

        if (response.data != null) setDataGroup(response.data);

    };



    const deleteV = async (value) => {

        const result = await deletev(value, url + "wish");

        if (result === true) {

            setDetailWish(null);

            loadData();

            getNbrLigne();

            getGroupBy();

            toast.success("Souhait supprimé.");

        } else {

            toast.error("Problème serveur, réessayez plus tard !");

        }

    };



    useEffect(() => {

        getGroupBy();

        getNbrLigne();

    }, []);



    useEffect(() => {

        loadData();

    }, [loadData]);



    return (

        <>

            <div className="flex h-screen ">

                <Sidebar />



                <main className="flex-1 ">

                    <div className="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">

                        <div className=" max-w-7xl mx-auto bg-white p-10 ">

                            <div className="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">

                                <div className="flex items-center justify-between">

                                    <h2 className="text-xl font-semibold text-gray-800">

                                        Liste des souhaits en attente

                                        <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize) || 1}`}</p>

                                    </h2>



                                    <div className="flex items-center space-x-3">

                                        <div className="flex space-x-2">

                                            <button

                                                className="btn-neutre-gray"

                                                onClick={() => setSeeTrainingListe(false)}

                                            >

                                                ⋮

                                            </button>

                                            <button

                                                className="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu"

                                                onClick={() => setSeeTrainingListe(true)}

                                            >

                                                total

                                            </button>

                                            {accesObj &&

                                            (accesObj?.wish?.faire_un_souhait == null ||

                                                accesObj?.wish?.faire_un_souhait == undefined) ? null : (

                                                <button

                                                    className="btn-neutre-gray"

                                                    onClick={() => setClose(true)}

                                                >

                                                    Faire un souhait

                                                </button>

                                            )}

                                            {accesObj &&

                                            (accesObj?.wish?.validation_formation == null ||

                                                accesObj?.wish?.validation_formation == undefined) ? null : (

                                                <button

                                                    className="btn-neutre-gray"

                                                    onClick={() => setCloseAddTraining(true)}

                                                >

                                                    Validation d'une formation

                                                </button>

                                            )}

                                            <button

                                                className="btn-neutre-gray"

                                                onClick={() => pagination(numpage - 1)}

                                                title="Précédent"

                                            >

                                                <i className="fas fa-arrow-left"></i>

                                            </button>

                                            <button

                                                className="btn-neutre-gray"

                                                onClick={() => pagination(numpage + 1)}

                                                title="Suivant"

                                            >

                                                <i className="fas fa-arrow-right"></i>

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>



                            <div className="overflow-x-auto mt-2">

                                {seeTrainingListe ? (

                                    <table className="w-full">

                                        <thead className="bg-gray-50 border-b border-gray-200">

                                            <tr>

                                                <th className="tr-thead">Thème</th>

                                                <th className="tr-thead flex justify-center items-center">

                                                    Nombre de souhaits

                                                </th>

                                                <th></th>

                                            </tr>

                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200">

                                            {dataGroup.map((value, index) => (

                                                <tr

                                                    key={value.idTheme ?? index}

                                                    className="hover:bg-gray-50"

                                                >

                                                    <td className="px-6 py-4 text-sm text-gray-500">

                                                        {value.nameTheme}

                                                    </td>

                                                    <td className="px-6 py-4 flex justify-center items-center">

                                                        <span

                                                            className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index % textbackground.length]}`}

                                                        >

                                                            {value.nbr}

                                                        </span>

                                                    </td>

                                                    <td className="px-6 py-4 text-sm text-gray-500">

                                                        <button type="button" title="Détails">

                                                            ⋮

                                                        </button>

                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>

                                ) : (

                                    <table className="w-full">

                                        <thead className="bg-gray-50 border-b border-gray-200">

                                            <tr>

                                                <th className="tr-thead">Date</th>

                                                <th className="tr-thead">Priorité</th>

                                                <th className="tr-thead">Thème</th>

                                                <th className="tr-thead">Bénéficiaire</th>

                                                <th className="tr-thead">Type</th>

                                                <th className="tr-thead w-24 text-center">Actions</th>

                                            </tr>

                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200">

                                            {data.map((value, index) => (

                                                <tr

                                                    key={value.id ?? index}

                                                    className="hover:bg-gray-50"

                                                >

                                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">

                                                        {formatDate(value.date) || "—"}

                                                    </td>

                                                    <td className="px-6 py-4">

                                                        <span

                                                            className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${

                                                                value.priority === 1

                                                                    ? "bg-amber-100 text-amber-800"

                                                                    : "bg-gray-100 text-gray-600"

                                                            }`}

                                                        >

                                                            {value.priority === 1

                                                                ? "Priorité"

                                                                : "Non-priorité"}

                                                        </span>

                                                    </td>

                                                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">

                                                        {value.nametheme}

                                                    </td>

                                                    <td className="px-6 py-4">

                                                        <div className="text-sm font-medium text-gray-900 capitalize">

                                                            {value.beneficiaryName}{" "}

                                                            {value.beneficiaryFirstname}

                                                        </div>

                                                        <div className="text-xs text-gray-500">

                                                            {value.beneficiaryMatricule}

                                                        </div>

                                                    </td>

                                                    <td className="px-6 py-4 text-sm text-gray-500">

                                                        {value.nametypewish || "—"}

                                                    </td>

                                                    <td className="px-6 py-4">

                                                        <div className="flex items-center justify-center gap-2">

                                                            <button

                                                                type="button"

                                                                className="btn-neutre-gray"

                                                                title="Voir le détail"

                                                                onClick={() => setDetailWish(value)}

                                                            >

                                                                <i className="fa-solid fa-eye"></i>

                                                            </button>

                                                            <button

                                                                type="button"

                                                                className="btn-neutre-gray text-red-600 hover:text-red-700"

                                                                title="Supprimer"

                                                                onClick={() => deleteV(value)}

                                                            >

                                                                <i className="fa-regular fa-trash-can"></i>

                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>

                                )}

                            </div>

                        </div>

                    </div>

                </main>

            </div>



            {close ? <CardWish close={setClose} /> : null}

            {closeAddTraining ? (

                <CardAddTraining close={setCloseAddTraining} />

            ) : null}

            {detailWish ? (

                <CardWishDetail

                    wish={detailWish}

                    close={setDetailWish}

                    onDelete={deleteV}

                />

            ) : null}

        </>

    );

}


