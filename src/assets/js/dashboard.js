
// Auto select left navbar
$(function () {
    "use strict";
    var url = window.location + "";
    var path = url.replace(
      window.location.protocol + "//" + window.location.host + "/",
      ""
    );
    var element = $("ul#sidebarnav a").filter(function () {
      return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
    });
  
  
    element.addClass("active");
    $("#sidebarnav a").on("click", function (e) {
      if (!$(this).hasClass("active")) {
        // hide any open menus and remove all other classes
        $("a", $(this).parents("ul:first")).removeClass("active");
  
        // open our new menu and add the open class
        $(this).addClass("active");
      } else if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });
  });


$(function () {
    // Admin Panel settings
  
    /* This is for the mini-sidebar if width is less then 1170*/
    
    var setsidebartype = function () {
      var width =
        window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      if (width < 1199) {
        $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
        $("#main-wrapper").addClass("mini-sidebar");
      } else {
        $("#main-wrapper").attr("data-sidebartype", "full");
        $("#main-wrapper").removeClass("mini-sidebar");
      }
    };
    $(window).ready(setsidebartype);
    $(window).on("resize", setsidebartype);
    
    /* This is for sidebartoggler*/

    $(".sidebartoggler").on("click", function () {
      $("#main-wrapper").toggleClass("mini-sidebar");
      if ($("#main-wrapper").hasClass("mini-sidebar")) {
        $(".sidebartoggler").prop("checked", !0);
        $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
      } else {
        $(".sidebartoggler").prop("checked", !1);
        $("#main-wrapper").attr("data-sidebartype", "full");
      }
    });
    $(".sidebartoggler").on("click", function () {
      $("#main-wrapper").toggleClass("show-sidebar");
    });
  })

  $(function () {

    // Sales Profit Start
    var options = {
      series: [
        {
          type: "area",
          name: "This Year",
          chart: {
            foreColor: "#111c2d99",
            fontSize: 12,
            fontWeight: 500,
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 5,
              left: 0,
              blur: 3,
              color: "#000",
              opacity: 0.1,
            },
          },
          data: [
            {
              x: "Aug",
              y: 25,
            },
            {
              x: "Sep",
              y: 25,
            },
            {
              x: "Oct",
              y: 10,
            },
            {
              x: "Nov",
              y: 10,
            },
            {
              x: "Dec",
              y: 45,
            },
            {
              x: "Jan",
              y: 45,
            },
            {
              x: "Feb",
              y: 75,
            },
            {
              x: "Mar",
              y: 70,
            },
            {
              x: "Apr",
              y: 35,
            },
          ],
        },
        {
          type: "line",
          name: "Last Year",
          chart: {
            foreColor: "#111c2d99",
          },
          data: [
            {
              x: "Aug",
              y: 50,
            },
            {
              x: "Sep",
              y: 50,
            },
            {
              x: "Oct",
              y: 25,
            },
            {
              x: "Nov",
              y: 20,
            },
            {
              x: "Dec",
              y: 20,
            },
            {
              x: "Jan",
              y: 20,
            },
            {
              x: "Feb",
              y: 35,
            },
            {
              x: "Mar",
              y: 35,
            },
            {
              x: "Apr",
              y: 60,
            },
          ],
        },
      ],
      chart: {
        height: 300,
        fontFamily: "inherit",
        foreColor: "#adb0bb",
        fontSize: "12px",
        offsetX: -15,
        offsetY: 10,
        animations: {
          speed: 500,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["var(--bs-primary)", "var(--bs-secondary-color)"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0.1,
          opacityTo: 0,
          stops: [100],
        },
      },
      grid: {
        show: true,
        strokeDashArray: 3,
        borderColor: "#90A4AE50",
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        tickAmount: 3,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: "dark",
      },
    };
    document.getElementById("sales-profit").innerHTML = "";
    var chart = new ApexCharts(document.querySelector("#sales-profit"), options);
    chart.render();
  
  
    // total-followers chart
    var totalfollowers = {
      series: [
        {
          name: "",
          data: [29, 52, 38, 47, 56],
        },
        {
          name: "",
          data: [71, 71, 71, 71, 71],
        },
      ],
      chart: {
        fontFamily: "inherit",
        type: "bar",
        height: 90,
        stacked: true,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        show: false,
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 1,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      colors: [
        "var(--bs-danger)",
        "var(--black-black-10, rgba(17, 28, 45, 0.10))",
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          borderRadius: [3],
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
      },
      legend: {
        show: false,
      },
    };
  
    var chart_column_stacked = new ApexCharts(
      document.querySelector("#total-followers"),
      totalfollowers
    );
    chart_column_stacked.render();
  
    // total-income
    var options = {
      chart: {
        id: "total-income",
        type: "area",
        height: 70,
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
        fontFamily: "inherit",
        foreColor: "#adb0bb",
      },
      series: [
        {
          name: "monthly earnings",
          color: "var(--bs-secondary)",
          data: [25, 33, 20, 40, 12, 58, 20],
        },
      ],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [30, 180],
        },
      },
  
      markers: {
        size: 0,
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: true,
          position: "right",
        },
        x: {
          show: false,
        },
      },
    };
    new ApexCharts(document.querySelector("#total-income"), options).render();
  
  
  })