import { useEffect, useState, useCallback } from "react";
import { Sidebar } from "../../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { Pie, PieChart, Sector } from "recharts";
import { COLORS, url_recrutement } from "../../../data/data";
import { getData, getDataWithObjectParametre } from "../../../function/Axios";
import Select from "../../../function/selectSimple";

export default function CandidateStat() {
  const [yearStatRegister, setYearStatRegister] = useState(new Date().getFullYear());
  const [listStatRegister, setListStatRegister] = useState([]);
  const [listPourcentageGenre, setListPourcentageGenre] = useState([]);
  const [listAgePourcentage, setListAgePourcentage] = useState([]);
  const [listDiplome, setListDiplome] = useState([]);
  const [listSelectDiplome, setListSelectDiplome] = useState([]);
  const [listStatParDiplome, setListStatParDiplome] = useState([]);
  const [ageBetween, setAgeBetween] = useState({ start: "", end: "" });
  const [listAgeBetween, setListAgeBetween] = useState([]);

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (cx == null || cy == null || innerRadius == null || outerRadius == null) return null;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${((percent || 0) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const MyCustomPie = (props) => (
    <Sector {...props} fill={COLORS[props.index % COLORS.length]} />
  );

  const handlerAgeBetween = (name, value) => {
    setAgeBetween((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const addListeDimplome = (opt) => {
    if (opt == null) return;
    setListDiplome((prev) => {
      if (prev.some((value) => value.id == opt.id)) return prev;
      return [...prev, opt];
    });
  };

  const deleteListeDimplome = (indexToRemove) => {
    setListDiplome((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const addAgeDate = () => {
    const start = Number(ageBetween.start);
    const end = Number(ageBetween.end);
    if (!Number.isFinite(start) || !Number.isFinite(end)) {
      toast.error("Veuillez saisir des âges numériques valides.");
      return;
    }
    if (start > end) {
      toast.error("L'âge de début doit être inférieur ou égal à l'âge de fin.");
      return;
    }
    setListAgeBetween((prev) => {
      if (prev.some((value) => value.start === start && value.end === end)) return prev;
      return [...prev, { start, end }];
    });
    setAgeBetween({ start: "", end: "" });
  };

  const deleteAgeBetween = (indexToRemove) => {
    setListAgeBetween((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const getStatCandidatRegisterDto = useCallback(async (year = yearStatRegister) => {
    try {
      const response = await getData(url_recrutement + `statistique/stat_register/${year}`);
      setListStatRegister(Array.isArray(response?.data) ? response.data : []);
    } catch {
      setListStatRegister([]);
      toast.error("Impossible de charger les inscriptions mensuelles.");
    }
  }, [yearStatRegister]);

  const getStatGenre = useCallback(async (year = yearStatRegister) => {
    try {
      const response = await getData(url_recrutement + `statistique/stat_genre/${year}`);
      setListPourcentageGenre(Array.isArray(response?.data) ? response.data : []);
    } catch {
      setListPourcentageGenre([]);
      toast.error("Impossible de charger les stats par genre.");
    }
  }, [yearStatRegister]);

  const getListeDiplomeCndidateInYear = useCallback(async (year = yearStatRegister) => {
    try {
      const response = await getData(url_recrutement + `statistique/get_liste_diplome/${year}`);
      setListSelectDiplome(Array.isArray(response?.data) ? response.data : []);
    } catch {
      setListSelectDiplome([]);
    }
  }, [yearStatRegister]);

  const reloadYearStats = async () => {
    const year = Number(yearStatRegister);
    if (!Number.isFinite(year) || year < 1900) {
      toast.error("Année invalide.");
      return;
    }
    await Promise.all([
      getStatCandidatRegisterDto(year),
      getStatGenre(year),
      getListeDiplomeCndidateInYear(year),
    ]);
  };

  const getListAgePourcentageDto = async () => {
    if (!listAgeBetween.length) {
      toast.error("Ajoutez au moins une tranche d'âge.");
      return;
    }
    const response = await getDataWithObjectParametre(
      listAgeBetween,
      url_recrutement + `statistique/stat_age/${yearStatRegister}`
    );
    if (!response || response.success === false) {
      setListAgePourcentage([]);
      toast.error(response?.message || "Impossible de charger les stats par âge.");
      return;
    }
    setListAgePourcentage(Array.isArray(response.data) ? response.data : []);
  };

  const getListStatParDiplome = async () => {
    if (!listDiplome.length) {
      toast.error("Sélectionnez au moins un diplôme.");
      return;
    }
    const response = await getDataWithObjectParametre(
      listDiplome.map((value) => value.id),
      url_recrutement + `statistique/stat_diplome/${yearStatRegister}`
    );
    if (!response || response.success === false) {
      setListStatParDiplome([]);
      toast.error(response?.message || "Impossible de charger les stats par diplôme.");
      return;
    }
    setListStatParDiplome(Array.isArray(response.data) ? response.data : []);
  };

  useEffect(() => {
    reloadYearStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-1 ">
        <div className="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
          <div className=" max-w-7xl mx-auto bg-white p-10 ">
            <div className="flex items-center justify-between py-2 ">
              <h2 className="text-xl font-semibold text-gray-800">Statistiques sur les candidats</h2>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <p>Statistiques mensuelles des inscriptions de candidats</p>
                <input
                  type="number"
                  value={yearStatRegister}
                  className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-28"
                  onChange={(event) => setYearStatRegister(Number(event.target.value) || "")}
                />
                <button type="button" onClick={reloadYearStats} title="Actualiser">
                  <svg className="w-5 h-5 text-gray-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
              <div>
                <LineChart
                  style={{ width: "100%", maxHeight: "30vh", aspectRatio: 1.618 }}
                  responsive
                  data={listStatRegister}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="nbr_candidate" name="Candidats" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </div>
            </div>

            <label className="label_input">Pourcentage des inscrits par sexe</label>
            <div className="flex gap-2">
              <div className="w-1/2">
                <PieChart style={{ width: "100%", maxHeight: "30vh", aspectRatio: 1.618 }} responsive>
                  <Pie
                    data={listPourcentageGenre}
                    dataKey="pourcentage"
                    nameKey="name"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    shape={MyCustomPie}
                    isAnimationActive={true}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </div>
              <div className="w-1/2">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="tr-thead">Name</th>
                      <th className="tr-thead">Nombre</th>
                      <th className="tr-thead">Pourcentage (%)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {listPourcentageGenre.map((value, index) => (
                      <tr key={value.idgenre ?? index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{value.nbrGenre}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {value.pourcentage != null ? Number(value.pourcentage).toFixed(1) : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <div>
                  <label className="label_input">Section par âge</label>
                </div>
                <input
                  type="number"
                  placeholder="Début"
                  value={ageBetween.start}
                  className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-24"
                  onChange={(event) => handlerAgeBetween("start", event.target.value)}
                />
                <input
                  type="number"
                  placeholder="Fin"
                  value={ageBetween.end}
                  className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-24"
                  onChange={(event) => handlerAgeBetween("end", event.target.value)}
                />
                <button type="button" className="btn-neutre-gray" onClick={addAgeDate}>
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button type="button" className="btn-neutre-gray" onClick={getListAgePourcentageDto}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <div className="flex gap-2 bg-blue-50 py-2 my-2 flex-wrap">
                {listAgeBetween.map((value, index) => (
                  <div key={`${value.start}-${value.end}-${index}`} className="flex gap-1 items-center px-2">
                    <p>
                      {value.start} — {value.end}
                    </p>
                    <button type="button" onClick={() => deleteAgeBetween(index)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="tr-thead">Name</th>
                        <th className="tr-thead">Nombre</th>
                        <th className="tr-thead">Pourcentage (%)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {listAgePourcentage.map((value, index) => (
                        <tr key={value.name ?? index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{value.nbr}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {value.pourcentage != null ? Number(value.pourcentage).toFixed(1) : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-1/2">
                  <PieChart style={{ width: "100%", maxHeight: "30vh", aspectRatio: 1.618 }} responsive>
                    <Pie
                      data={listAgePourcentage}
                      dataKey="pourcentage"
                      nameKey="name"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      shape={MyCustomPie}
                      isAnimationActive={true}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <div>
                  <label className="label_input">Section par diplôme des candidats</label>
                </div>
                <Select
                  options={listSelectDiplome}
                  value={false}
                  placeholder="diplôme"
                  onChange={addListeDimplome}
                />
                <button type="button" className="btn-neutre-gray" onClick={getListStatParDiplome}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <div className="flex gap-2 bg-blue-50 py-2 my-2 flex-wrap">
                {listDiplome.map((value, index) => (
                  <div key={value.id ?? index} className="flex gap-1 items-center px-2">
                    <p>{value.name}</p>
                    <button type="button" onClick={() => deleteListeDimplome(index)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
              <label className="label_input">Pourcentage des inscrits par diplôme</label>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="tr-thead">Name</th>
                        <th className="tr-thead">Pourcentage (%)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {listStatParDiplome.map((value, index) => (
                        <tr key={value.name ?? index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {value.pourcentage != null ? Number(value.pourcentage).toFixed(1) : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-1/2">
                  <PieChart style={{ width: "100%", maxHeight: "30vh", aspectRatio: 1.618 }} responsive>
                    <Pie
                      data={listStatParDiplome}
                      dataKey="pourcentage"
                      nameKey="name"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      shape={MyCustomPie}
                      isAnimationActive={true}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
