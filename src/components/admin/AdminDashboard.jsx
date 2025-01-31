import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../Dashboard/Table.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ApexCharts from 'apexcharts'

function AdminDashboard() {
    const { userId } = useParams();
    const userAuth = useSelector((state) => state.auth);
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isChanged, setIsChanged] = useState({
        profit: false,
        sales: false,
        payments: false,
        transactions: false,
    });
    const [newValues, setNewValues] = useState({
        profit: null,
        sales: null,
        payments: null,
        transactions: null,
    });
    const [showForm, setShowForm] = useState(false);
    const [newBook, setNewBook] = useState({
        bookName: '',
        mrp: '',
        quantityLeft: '',
        royaltyEarned: '',
        booksSold: ''
    });

    const handleAddBookClick = () => {
        setShowForm(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/dashboardDataById/${userId}/books`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token ? token : '',
                },
                body: JSON.stringify({ books: [newBook] }),
            });

            if (!response.ok) {
                throw new Error('Failed to add book');
            }

            const data = await response.json();
            setDashboardData(data);
            setShowForm(false);
            setNewBook({
                bookName: '',
                mrp: '',
                quantityLeft: '',
                royaltyEarned: '',
                booksSold: ''
            });
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    // useEffect(() => {
    //     const fetchDashboardData = async () => {
    //         try {
    //             const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/dashboardDataById/${userId}`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 credentials: 'include', // Include cookies for authentication
    //             });

    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setDashboardData(data);
    //                 setNewValues({
    //                     profit: data.metrics.profit.value,
    //                     sales: data.metrics.sales.value,
    //                     payments: data.metrics.payments.value,
    //                     transactions: data.metrics.transactions.value,
    //                 });
    //             } else {
    //                 setError('Failed to fetch dashboard data');
    //             }
    //         } catch (error) {
    //             setError('Failed to fetch dashboard data');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchDashboardData();
    // }, [userId]);

    useEffect(() => {
        const fetchDashboardData = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/dashboardDataById/${userId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token ? token : '',
              },
              credentials: 'include', // Include cookies for authentication
            });
      
            if (response.ok) {
              const data = await response.json();
              setDashboardData(data);
              setNewValues({
                profit: data.metrics.profit.value,
                sales: data.metrics.sales.value,
                payments: data.metrics.payments.value,
                transactions: data.metrics.transactions.value,
              });
            } else {
              setError('Failed to fetch dashboard data');
            }
          } catch (error) {
            setError('Failed to fetch dashboard data');
          } finally {
            setLoading(false);
          }
        };
      
        fetchDashboardData();
      }, [userId]);


    const handleChange = (e, field) => {
        const value = e.target.value;
        setNewValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
        setIsChanged((prevChanged) => ({
            ...prevChanged,
            [field]: value !== dashboardData.metrics[field].value,
        }));
    };

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/dashboardDataById/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token ? token : '',
                },
                credentials: 'include', // Include cookies for authentication
                body: JSON.stringify({
                    metrics: {
                        ...dashboardData.metrics,
                        profit: {
                            ...dashboardData.metrics.profit,
                            value: newValues.profit,
                        },
                        sales: {
                            ...dashboardData.metrics.sales,
                            value: newValues.sales,
                        },
                        payments: {
                            ...dashboardData.metrics.payments,
                            value: newValues.payments,
                        },
                        transactions: {
                            ...dashboardData.metrics.transactions,
                            value: newValues.transactions,
                        },
                    },
                }),
            });

            if (response.ok) {
                const updatedData = await response.json();
                setDashboardData(updatedData);
                setIsChanged({
                    profit: false,
                    sales: false,
                    payments: false,
                    transactions: false,
                });
            } else {
                setError('Failed to update dashboard data');
            }
        } catch (error) {
            setError('Failed to update dashboard data');
        }
    };

    useEffect(() => {
        let totalRevenueChart;
        let growthChart;
        let incomeChart;
        let orderStatisticsChart;
        let profileReportChart;
        if (dashboardData) {
            const totalRevenueChartOptions = {
                series: [
                    {
                        name: '2021',
                        data: [18, 7, 15, 29, 18, 12, 9]
                    },
                    {
                        name: '2020',
                        data: [-13, -18, -9, -14, -5, -17, -15]
                    }
                ],
                chart: {
                    height: 300,
                    stacked: true,
                    type: 'bar',
                    toolbar: { show: false }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '33%',
                        borderRadius: 12,
                        startingShape: 'rounded',
                        endingShape: 'rounded'
                    }
                },
                colors: ['#7367F0', '#28C76F'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 6,
                    lineCap: 'round',
                    colors: ['#fff']
                },
                legend: {
                    show: true,
                    horizontalAlign: 'left',
                    position: 'top',
                    markers: {
                        height: 8,
                        width: 8,
                        radius: 12,
                        offsetX: -3
                    },
                    labels: {
                        colors: '#6E8192'
                    },
                    itemMargin: {
                        horizontal: 10
                    }
                },
                grid: {
                    borderColor: '#E4E6E8',
                    padding: {
                        top: 0,
                        bottom: -8,
                        left: 20,
                        right: 20
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    labels: {
                        style: {
                            fontSize: '13px',
                            colors: '#6E8192'
                        }
                    },
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: '13px',
                            colors: '#6E8192'
                        }
                    }
                },
                responsive: [
                    {
                        breakpoint: 1700,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '32%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 1580,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '35%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 1440,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '42%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 1300,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '48%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 1200,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '40%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 1040,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 11,
                                    columnWidth: '48%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 991,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '30%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 840,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '35%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 768,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '28%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 640,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '32%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 576,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '37%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 480,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '45%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 420,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '52%'
                                }
                            }
                        }
                    },
                    {
                        breakpoint: 380,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 10,
                                    columnWidth: '60%'
                                }
                            }
                        }
                    }
                ],
                states: {
                    hover: {
                        filter: {
                            type: 'none'
                        }
                    },
                    active: {
                        filter: {
                            type: 'none'
                        }
                    }
                }
            };


            const growthChartOptions = {
                series: [100],
                labels: ['Growth'],
                chart: {
                    height: 240,
                    type: 'radialBar'
                },
                plotOptions: {
                    radialBar: {
                        size: 150,
                        offsetY: 10,
                        startAngle: -150,
                        endAngle: 150,
                        hollow: {
                            size: '55%'
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '100%'
                        },
                        dataLabels: {
                            name: {
                                offsetY: 15,
                                color: '#6E8192',
                                fontSize: '15px',
                                fontWeight: '500',
                                fontFamily: 'Public Sans'
                            },
                            value: {
                                offsetY: -25,
                                color: '#6E8192',
                                fontSize: '22px',
                                fontWeight: '500',
                                fontFamily: 'Public Sans'
                            }
                        }
                    }
                },
                colors: ['#7367F0'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#7367F0'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.6,
                        stops: [30, 70, 100]
                    }
                },
                stroke: {
                    dashArray: 5
                },
                grid: {
                    padding: {
                        top: -35,
                        bottom: -10
                    }
                },
                states: {
                    hover: {
                        filter: {
                            type: 'none'
                        }
                    },
                    active: {
                        filter: {
                            type: 'none'
                        }
                    }
                }
            };


            const incomeChartOptions = {
                series: [
                    {
                        data: [21, 30, 22, 42, 26, 35, 29]
                    }
                ],
                chart: {
                    height: 232,
                    parentHeightOffset: 0,
                    parentWidthOffset: 0,
                    toolbar: {
                        show: false
                    },
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                legend: {
                    show: false
                },
                markers: {
                    size: 6,
                    colors: 'transparent',
                    strokeColors: 'transparent',
                    strokeWidth: 4,
                    discrete: [
                        {
                            fillColor: '#fff',
                            seriesIndex: 0,
                            dataPointIndex: 6,
                            strokeColor: '#7367F0',
                            strokeWidth: 2,
                            size: 6,
                            radius: 8
                        }
                    ],
                    hover: {
                        size: 7
                    }
                },
                colors: ['#7367F0'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.6,
                        opacityFrom: 0.5,
                        opacityTo: 0.25,
                        stops: [0, 95, 100]
                    }
                },
                grid: {
                    borderColor: '#E4E6E8',
                    strokeDashArray: 8,
                    padding: {
                        top: -20,
                        bottom: -8,
                        left: 0,
                        right: 8
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: true,
                        style: {
                            fontSize: '13px',
                            colors: '#6E8192'
                        }
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    },
                    min: 10,
                    max: 50,
                    tickAmount: 4
                }
            };


            const orderStatisticsChartOptions = {
                chart: {
                    height: 145,
                    width: 110,
                    type: 'donut'
                },
                labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
                series: [50, 85, 25, 40],
                colors: ['#28C76F', '#7367F0', '#EA5455', '#FF9F43'],
                stroke: {
                    width: 5,
                    colors: ['#fff']
                },
                dataLabels: {
                    enabled: false,
                    formatter: function (val, opt) {
                        return val + '%';
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        right: 15
                    }
                },
                states: {
                    hover: {
                        filter: { type: 'none' }
                    },
                    active: {
                        filter: { type: 'none' }
                    }
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%',
                            labels: {
                                show: true,
                                value: {
                                    fontSize: '18px',
                                    fontFamily: 'Public Sans',
                                    fontWeight: 500,
                                    color: '#6E8192',
                                    offsetY: -17,
                                    formatter: function (val) {
                                        return val + '%';
                                    }
                                },
                                name: {
                                    offsetY: 17,
                                    fontFamily: 'Public Sans'
                                },
                                total: {
                                    show: true,
                                    fontSize: '13px',
                                    color: '#6E8192',
                                    label: 'Weekly',
                                    formatter: function (w) {
                                        return '38%';
                                    }
                                }
                            }
                        }
                    }
                }
            };

            const profileReportChartOptions = {
                chart: {
                    height: 75,
                    type: 'line',
                    toolbar: {
                        show: false
                    },
                    dropShadow: {
                        enabled: true,
                        top: 10,
                        left: 5,
                        blur: 3,
                        color: '#FF9F43',
                        opacity: 0.15
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                grid: {
                    show: false,
                    padding: {
                        right: 8
                    }
                },
                colors: ['#FF9F43'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 5,
                    curve: 'smooth'
                },
                series: [
                    {
                        data: [110, 270, 145, 245, 205, 285]
                    }
                ],
                xaxis: {
                    show: false,
                    lines: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                yaxis: {
                    show: false
                }
            };



            totalRevenueChart = new ApexCharts(document.querySelector("#totalRevenueChart"), totalRevenueChartOptions);
            totalRevenueChart.render();

            growthChart = new ApexCharts(document.querySelector("#growthChart"), growthChartOptions);
            growthChart.render();

            incomeChart = new ApexCharts(document.querySelector("#incomeChart"), incomeChartOptions);
            incomeChart.render();

            orderStatisticsChart = new ApexCharts(document.querySelector("#orderStatisticsChart"), orderStatisticsChartOptions);
            orderStatisticsChart.render();

            profileReportChart = new ApexCharts(document.querySelector("#profileReportChart"), profileReportChartOptions);
            profileReportChart.render();
        }

        return () => {
            if (totalRevenueChart) {
                totalRevenueChart.destroy();
            }
            if (growthChart) {
                growthChart.destroy();
            }
            if (incomeChart) {
                incomeChart.destroy();
            }
            if (orderStatisticsChart) {
                orderStatisticsChart.destroy();
            }
            if (profileReportChart) {
                profileReportChart.destroy();
            }
        };
    }, [dashboardData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!dashboardData) {
        return <div>No data available</div>;
    }

    const {
        metrics: { profit, sales, payments, transactions },
        charts: { totalRevenue, growth, profileReport },
        orders,
        books
    } = dashboardData;

    return (
        <>
            <div className="row mt-10 px-4">
                <div className="col-lg-8 mb-4 order-0">
                    <div className="card">
                        <div className="d-flex align-items-end row">
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">
                                        Congratulations ! {userAuth?.user?.username} 🎉
                                    </h5>
                                    <p className="mb-4">
                                        You have done <span className="fw-medium">72%</span> more
                                        sales today. Check your new badge in your profile.
                                    </p>

                                    <a aria-label="view badges"
                                        href="#"
                                        className="btn btn-sm btn-outline-primary"
                                    >
                                        View Badges
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3 text-center text-sm-left">
                                <div className="card-body pb-0 px-0 px-md-4">
                                    <img aria-label='dsahboard icon image'
                                        src="/assets/img/illustrations/man-with-laptop-light.png"
                                        height="140"
                                        alt="View Badge User"
                                        data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                        data-app-light-img="illustrations/man-with-laptop-light.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 order-1">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-start justify-content-between">
                                        <div className="avatar flex-shrink-0">
                                            <img aria-label='dsahboard icon image'
                                                src="/assets/img/icons/unicons/chart-success.png"
                                                alt="chart success"
                                                className="rounded"
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                className="btn p-0"
                                                type="button"
                                                id="cardOpt3"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="cardOpt3"
                                            >
                                                <a aria-label="view more" className="dropdown-item" href="#">
                                                    View More
                                                </a>
                                                <a aria-label="delete" className="dropdown-item" href="#">
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="fw-medium d-block mb-1">Total Profit</span>
                                    <input
                                        type="number"
                                        value={newValues.profit}
                                        onChange={(e) => handleChange(e, 'profit')}
                                        className="form-control mb-2"
                                    />
                                    {isChanged.profit && (
                                        <button
                                            className="bg-green-500 p-1 text-white rounded-md cursor-pointer mt-2"
                                            onClick={handleUpdate}
                                        >
                                            Update
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-start justify-content-between">
                                        <div className="avatar flex-shrink-0">
                                            <img aria-label='dsahboard icon image'
                                                src="/assets/img/icons/unicons/wallet-info.png"
                                                alt="Credit Card"
                                                className="rounded"
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                className="btn p-0"
                                                type="button"
                                                id="cardOpt6"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="cardOpt6"
                                            >
                                                <a aria-label="view more" className="dropdown-item" href="#">
                                                    View More
                                                </a>
                                                <a aria-label="delete" className="dropdown-item" href="#">
                                                    View More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <span>Total Book Sold</span>
                                    <input
                                        type="number"
                                        value={newValues.sales}
                                        onChange={(e) => handleChange(e, 'sales')}
                                        className="form-control mb-2"
                                    />
                                    {isChanged.sales && (
                                        <button
                                            className="bg-green-500 p-1 text-white rounded-md cursor-pointer mt-2"
                                            onClick={handleUpdate}
                                        >
                                            Update
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                    <div className="card">
                        <div className="row row-bordered g-0">
                            <div className="col-md-8">
                                <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                                <div id="totalRevenueChart" className="px-2"></div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <div className="text-center">
                                        <div className="dropdown">
                                            <div className='font-semibold'>2025</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Growth Chart illustration */}
                                <div id="growthChart"></div>
                                <div className="text-center fw-medium pt-3 mb-2">
                                    Auther Projected Growth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                    <div className="row">
                        <div className="col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-start justify-content-between">
                                        <div className="avatar flex-shrink-0">
                                            <img aria-label='dsahboard icon image'
                                                src="/assets/img/icons/unicons/paypal.png"
                                                alt="Credit Card"
                                                className="rounded"
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                className="btn p-0"
                                                type="button"
                                                id="cardOpt4"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="cardOpt4"
                                            >
                                                <a aria-label="view more" className="dropdown-item" href="#">
                                                    View More
                                                </a>
                                                <a aria-label="delete" className="dropdown-item" href="#">
                                                    View More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="d-block mb-1">Stock</span>
                                    <input
                                        type="number"
                                        value={newValues.payments}
                                        onChange={(e) => handleChange(e, 'payments')}
                                        className="form-control mb-2"
                                    />
                                    {isChanged.payments && (
                                        <button
                                            className="bg-green-500 p-1 text-white rounded-md cursor-pointer mt-2"
                                            onClick={handleUpdate}
                                        >
                                            Update
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-start justify-content-between">
                                        <div className="avatar flex-shrink-0">
                                            <img aria-label='dsahboard icon image'
                                                src="/assets/img/icons/unicons/cc-primary.png"
                                                alt="Credit Card"
                                                className="rounded"
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                className="btn p-0"
                                                type="button"
                                                id="cardOpt1"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                                <a aria-label="view more" className="dropdown-item" href="#">
                                                    View More
                                                </a>
                                                <a aria-label="delete" className="dropdown-item" href="#">
                                                    View More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="fw-medium d-block mb-1">Total sales</span>
                                    <input
                                        type="number"
                                        value={newValues.transactions}
                                        onChange={(e) => handleChange(e, 'transactions')}
                                        className="form-control mb-2"
                                    />
                                    {isChanged.transactions && (
                                        <button
                                            className="bg-green-500 p-1 text-white rounded-md cursor-pointer mt-2"
                                            onClick={handleUpdate}
                                        >
                                            Update
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                        <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                            <div className="card-title">
                                                <h5 className="text-nowrap mb-2">Profile Report</h5>
                                                <span className="badge bg-label-warning rounded-pill">
                                                    Year 2025
                                                </span>
                                            </div>
                                        </div>
                                        <div id="profileReportChart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-4">
                <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                    <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between pb-0">
                            <div className="card-title mb-0">
                                <h5 className="m-0 me-2">Author Books</h5>

                            </div>
                            <div className="dropdown">
                                <button aria-label='Click me'
                                    className="btn p-0"
                                    type="button"
                                    id="orederStatistics"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="orederStatistics"
                                >
                                    <a aria-label="select all " className="dropdown-item" href="#">
                                        Select All
                                    </a>
                                    <a aria-label="refresh" className="dropdown-item" href="#">
                                        Refresh
                                    </a>
                                    <a aria-label="share" className="dropdown-item" href="#">
                                        Share
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-column align-items-center gap-1">

                                    <span>Top Books</span>
                                </div>
                                <div id="orderStatisticsChart"></div>
                            </div>

                            <ul className="p-0 m-0">

                                {
                                    books.map((book, index) => (
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-initial rounded bg-label-primary">
                                                    <i className="bx bx-mobile-alt"></i>
                                                </span>
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">{book.bookName}</h6>
                                                    <small className="text-muted">{book.quantityLeft}</small>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-medium">{book.mrp}</small>
                                                </div>
                                            </div>
                                        </li>
                                    ))

                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 order-1 mb-4">
                    <div className="card h-100">
                        <div className="card-header">
                            <ul className="nav nav-pills" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                        aria-label='Select Income Tab'
                                        className="nav-link active"
                                        id="navs-tabs-line-card-income-tab"
                                        data-bs-toggle="tab"
                                        href="#navs-tabs-line-card-income"
                                        role="tab"
                                        aria-controls="navs-tabs-line-card-income"
                                        aria-selected="true"
                                    >
                                        Income
                                    </a>
                                </li>
                                
                            </ul>

                        </div>
                        <div className="card-body px-0">
                            <div className="tab-content p-0">
                                <div
                                    className="tab-pane fade show active"
                                    id="navs-tabs-line-card-income"
                                    role="tabpanel"
                                    aria-labelledby="navs-tabs-line-card-income"
                                >
                                    <div className="d-flex p-4 pt-3">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <img
                                                aria-label='Dashboard Icon Image'
                                                src="/assets/img/icons/unicons/wallet.png"
                                                alt="User"
                                            />
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">
                                                Income Track
                                            </small>
                                            <div className="d-flex align-items-center">

                                                <small className="text-success fw-medium">
                                                    <i className="bx bx-chevron-up"></i>
                                                    Projected Outcome
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="incomeChart" aria-label="Income Chart"></div>
                                    <div className="d-flex justify-content-center pt-4 gap-2">
                                        <div className="flex-shrink-0">
                                            <div id="expensesOfWeek" aria-label="Expenses of the Week"></div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 order-2 mb-4">
                    <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">Quotes</h5>
                            <div className="dropdown">
                                <button aria-label='Transactions'
                                    className="btn p-0"
                                    type="button"
                                    id="transactionID"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="transactionID"
                                >
                                    <a aria-label="dropdown item Last 28 Days" className="dropdown-item" href="#">
                                        Last 28 Days
                                    </a>
                                    <a aria-label="dropdown item Last Month" className="dropdown-item" href="#">
                                        Last Month
                                    </a>
                                    <a aria-label="dropdown item Last Year" className="dropdown-item" href="#">
                                        Last Year
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="p-0 m-0 flex flex-col gap-4">
                                
                                <li className="font-semibold italic">"A writer is someone for whom writing is more difficult than it is for other people." – Thomas Mann</li>
                                <li className="font-semibold italic">"The role of a writer is not to say what we all can say, but what we are unable to say." – Anaïs Nin</li>
                                <li className="font-semibold italic">"There is no greater agony than bearing an untold story inside you." – Maya Angelou</li>
                                <li className="font-semibold italic">"The scariest moment is always just before you start." – Stephen King</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 mb-20">
                <Table books={books} />
                <div className="flex justify-end items-center mt-4">
                    <button onClick={handleAddBookClick} className="p-2 px-3 bg-orange-500 text-white rounded-lg">Add Book</button>
                </div>
                {showForm && (
                    <form onSubmit={handleFormSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-md">
                        <div className=" grid grid-cols-3 gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Book Name:</label>
                                <input
                                    type="text"
                                    name="bookName"
                                    value={newBook.bookName}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">MRP:</label>
                                <input
                                    type="number"
                                    name="mrp"
                                    value={newBook.mrp}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Quantity Left:</label>
                                <input
                                    type="number"
                                    name="quantityLeft"
                                    value={newBook.quantityLeft}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Royalty Earned:</label>
                                <input
                                    type="number"
                                    name="royaltyEarned"
                                    value={newBook.royaltyEarned}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Books Sold:</label>
                                <input
                                    type="number"
                                    name="booksSold"
                                    value={newBook.booksSold}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </form>
                )}
            </div>
        </>
    );
}

export default AdminDashboard;