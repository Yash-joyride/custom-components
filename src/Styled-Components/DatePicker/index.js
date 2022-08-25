import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputFieldSuccessContainer } from "../InputField/style";
import DatePickerAfterArrowIcon from "../Icons/DatePickerAfterArrowIcon";
import DatePickerPreviousArrowIcon from "../Icons/DatePickerPreviousArrowIcon";
import DatePickerSelectionIcon from "../Icons/DatePickerSelectionIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import { DatePickerTabItems } from "./constant";
import { RequiredLabel } from "../labels";
import {
  DatePickerContainer,
  DatePickerInputWrapper,
  DatePickerSettingPanelContainer,
  DatePickerSettingPanelScreen,
  DatePickerSettingPanelWrapper,
  DatePickerWrapper,
  DatePickerButtonWrapper,
} from "./style";

export const DatePickerInput = ({
  onChange,
  placeholder,
  value,
  isSecure,
  id,
  onClick,
}) => {
  return (
    <DatePickerInputWrapper>
      <InputFieldSuccessContainer>
        <RequiredLabel label="Label" />
        <TextField
          placeholder="Choose a Date"
          InputProps={{
            endAdornment: <DatePickerSelectionIcon />,
          }}
          onChange={onChange}
          value={value}
          isSecure={isSecure}
          id={id}
          onClick={onClick}
        />
      </InputFieldSuccessContainer>
    </DatePickerInputWrapper>
  );
};

export const DateRangePicker = ({ onDateSelected, buttonStyle }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setDatePicker] = useState(false);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (onDateSelected) {
      onDateSelected({
        selectedDate: {
          startDate: start
            ? `${new Date(start).getDate()}/${
                new Date(start).getMonth() + 1
              }/${new Date(start).getFullYear()}`
            : null,
          endDate: end
            ? `${new Date(end).getDate()}/${
                new Date(end).getMonth() + 1
              }/${new Date(end).getFullYear()}`
            : null,
        },
      });
    }
  };
  const [value, setValue] = useState("Today");
  const datepickerRef = useRef(null);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    setStartDate("");
    setEndDate("");

    if (onDateSelected) {
      onDateSelected({ selectedDate: value });
    }
  };

  const openDatePicker = () => {
    setDatePicker(!showDatePicker);
  };

  return (
    <>
      <DatePickerButtonWrapper>
        <Button
          className={[
            "DatePickerButton",
            startDate && startDate !== "" && endDate && endDate !== ""
              ? "DatePickerButtonWithDate"
              : "",
            buttonStyle ? [...buttonStyle] : "",
          ]}
          endIcon={<CalendarIcon />}
          disableRipple
          onClick={openDatePicker}
        >
          <span>
            {startDate && startDate !== "" && endDate && endDate !== ""
              ? `${new Date(startDate).getDate()}/${
                  new Date(startDate).getMonth() + 1
                }/${new Date(startDate).getFullYear()} - ${new Date(
                  endDate
                ).getDate()}/${new Date(endDate).getMonth() + 1}/${new Date(
                  endDate
                ).getFullYear()}`
              : value}
          </span>
        </Button>
      </DatePickerButtonWrapper>
      {showDatePicker ? (
        <DatePickerContainer innerRef={datepickerRef}>
          <DatePickerSettingPanelContainer>
            <DatePickerSettingPanelWrapper>
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
              >
                {DatePickerTabItems.map((DatePickerTabItem) => {
                  return (
                    <Tab
                      icon={DatePickerTabItem.icon}
                      value={DatePickerTabItem.value}
                      label={DatePickerTabItem.label}
                    />
                  );
                })}
              </Tabs>
            </DatePickerSettingPanelWrapper>
            <DatePickerSettingPanelScreen>
              {/* <DatePickerHeading>Custom Date Range</DatePickerHeading> */}
              <DatePickerWrapper>
                <DatePicker
                  //   showPreviousMonths={true}
                  formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
                  renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                  }) => (
                    <div>
                      <button
                        aria-label="Previous Month"
                        className={
                          "react-datepicker__navigation react-datepicker__navigation--previous"
                        }
                        onClick={decreaseMonth}
                      >
                        <DatePickerPreviousArrowIcon />
                      </button>
                      <span className="react-datepicker__current-month">
                        {monthDate.toLocaleString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <button
                        aria-label="Next Month"
                        className={
                          "react-datepicker__navigation react-datepicker__navigation--next"
                        }
                        onClick={increaseMonth}
                      >
                        <DatePickerAfterArrowIcon />
                      </button>
                    </div>
                  )}
                  customInput={<DatePickerInput />}
                  selected={startDate}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  onChange={onChange}
                  monthsShown={2}
                  inline
                />
              </DatePickerWrapper>
            </DatePickerSettingPanelScreen>
          </DatePickerSettingPanelContainer>
        </DatePickerContainer>
      ) : null}
    </>
  );
};
