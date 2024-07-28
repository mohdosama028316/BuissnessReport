const ctx = document.getElementById('myChart1').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['7 June','10 June', '13 June', '16 June', '19 June', '22 June', '25 June'],
                datasets: [{
                    label: 'Revenue in Thousand($)',
                    data: [30, 44, 58.5, 35, 45, 90,93],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue in Thousand($)',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
            }
            
        });

const ctx6 = document.getElementById('myChart6').getContext('2d')
const myPieChart3 = new Chart(ctx6, {
    type: 'pie',
    data: {
        labels: ['Male(45.21%)','Femail(54.79%)'],
        datasets: [{
            label: 'Revenue By Gender',
            data: [45.21,54.79],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(1,1,1, 1)',
                'rgba(1,1,1, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue By Gender',
                        font: {
                            size: 15
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
    },
    },
);

const ctx3 = document.getElementById('myChart3').getContext('2d')
const myPieChart2 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Credit Card(23%)', 'Cash(75)', 'Gift Card(3%)'],
        datasets: [{
            label: 'Paymnet In Percentage',
            data: [23, 75, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
            ],
            borderColor: [
                'rgba(1,1,1, 1)',
                'rgba(1,1,1, 1)',
                'rgba(1,1,1, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                plugins: {
                    title: {
                        display: true,
                        text: 'Paymnet Method In Percentage',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
    }
});

const ctx4 = document.getElementById('myChart4').getContext('2d');
        const myChart4 = new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: ['Anna Perez', 'Remy Monet', 'Jenna Silva', 'Tom Jackson', 'Walter Muller'],
                datasets: [{
                    label: 'Unit Sold By Sales Person',
                    data: [2506, 880, 811, 556, 121],
                    borderColor:[
                        

                    ],
                    backgroundColor: ['rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(175, 238, 238, 1)',
                'rgba(54, 162, 235, 1)'],
                    borderWidth: 2,
                    gridline:false,
                }]
            },
            options: {
                responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Unit Sold By Sales Person',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
            }
            
});

const ctx5 = document.getElementById('myChart5').getContext('2d');
        const myChart5 = new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: ['USA', 'France', 'Italy', 'Japan', 'Estonia','UK','Denmark'],
                datasets: [{
                    label: 'Revenue Generated By Country in Millions($)',
                    data: [0.29, 0.286, 0.273, 0.22, 0.18,0.08,0.004],
                    borderColor: 'rgba(1,1,1,1)',
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(175, 238, 238, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 2,
                    gridline:false,
                }]
            },
            options: {
                responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue Generated By Country in Millions($)',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
            }
            
});



const ctx2 = document.getElementById('myChart2').getContext('2d')
const myPieChart = new Chart(ctx2, {
    type: 'polarArea',
    data: {
        labels: ['Anna Perez', 'Remy Monet', 'Jenna Silva', 'Tom Jackson', 'Walter Muller'],
        datasets: [{
            label: 'Revenue By Sales Person(%)',
            data: [48.25,21.65,14.68,12.37,3.04],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(175, 238, 238, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgb(1,1,1)',
                    'rgb(1,1,1)',
                    'rgb(1,1,1)',
                    'rgb(1,1,1)',
                    'rgb(1,1,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue By Sales Person(%)',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
            }
    }
);