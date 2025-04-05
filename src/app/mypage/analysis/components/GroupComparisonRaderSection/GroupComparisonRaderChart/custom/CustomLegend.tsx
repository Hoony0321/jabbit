const CustomLegend = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div
        key="userLabel"
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <div
          style={{
            width: 21,
            height: 21,
            borderRadius: 5,
            backgroundColor: '#C2C6DF',
          }}
        />
        <span style={{ fontSize: 14, color: '#000000', fontWeight: 500 }}>
          나
        </span>
      </div>
      <div
        key="avgLabel"
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <div
          style={{
            width: 21,
            height: 21,
            borderRadius: 5,
            backgroundColor: '#E3E3E3',
          }}
        />
        <span style={{ fontSize: 14, color: '#000000', fontWeight: 500 }}>
          평균
        </span>
      </div>
    </div>
  );
};

export default CustomLegend;
